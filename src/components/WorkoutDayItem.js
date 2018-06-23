import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const WorkoutItem = (props) => {

  const workouts = props.workouts;
  //   const items = workouts.map((workout) =>
  //       <div>
  //       <li><strong>{workout.name}</strong></li>
  //       <li>Weight: {workout.weight}</li>
  //       <li>Sets: {workout.sets}</li>
  //       <li>Reps: {workout.reps}</li>
  //       </div>
  // );
  let date;
  let isWorkout = true;
  if (workouts.length === 0) {
    isWorkout = false;
  }
  workouts.map((workout) => {
    date = workout.date;
  })

  return (
    // <div>
    //   {console.log(props)}
    //   {items}
    //   hello
    // </div>
    <div className="workout-day-container">
      <div className="workout-day-view">
        {!isWorkout ?
          <h3 className="no-data-message"> <em>No workout data for this day</em></h3> :
          <h2 className="workout-day-view-date">Workout Date: {moment(date).format('M/D')}</h2>
        }
        {
          workouts.map((workout) => (
            < ul key={workout.id}>
              <li><strong>{workout.name}</strong></li>
              <li>Weight: {workout.weight}lbs</li>
              <li>Sets: {workout.sets}</li>
              <li>Reps: {workout.reps}</li>
            </ul>
          ))
        }

      </div>
    </div >

    // <div className="workout-card">
    //   <li><strong>{name}</strong></li>
    //   <li>Weight: {weight}</li>
    //   <li>Sets: {sets}</li>
    //   <li>Reps: {reps}</li>
    //   <li>Date: {moment(date).format('M/D')} </li>
    // </div>
  );
}

export default WorkoutItem;