import uuid from 'uuid'
import database from '../firebase/firebase';

export const addWorkout = (workout) => ({
  type: 'ADD_WORKOUT',
  workout
});

export const startAddWorkout = (workoutData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      weight = '',
      sets = 0,
      reps = 0,
      date = '',
      note =''
    } = workoutData;
    const workout = { name, weight, sets, reps, note, date };

    return database.ref(`users/${uid}/workouts`).push(workout).then((ref) => {
      dispatch(addWorkout({
        id: ref.key,
        ...workout
      }));
    });
  };
};

export const setWorkouts = (workouts) => ({
  type: 'SET_WORKOUTS',
  workouts
});

export const startSetWorkouts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/workouts`)
  .once('value')
  .then((snapshot) => {
    const workouts = [];
    snapshot.forEach((childSnapshot) => {
      workouts.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    dispatch(setWorkouts(workouts));
  });
  };
};
