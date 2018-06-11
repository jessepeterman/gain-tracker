import React from 'react';
import { connect } from 'react-redux';
import WorkoutItem from './WorkoutItem';
// import selectWorkouts from "../selectors/Workouts";

export const LastWorkout = (props) => (
  <div>
    Most recent workout:
    {


    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
    lastWorkout: state.workouts[state.workouts.length - 1]
  };
}

export default connect(mapStateToProps)(LastWorkout);