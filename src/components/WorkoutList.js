import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WorkoutItem from './WorkoutItem';
import selectMaxWorkout from '../selectors/workout-max-weight';
import selectNameFilter from '../selectors/workout-name-filter';
import selectDateFilter from '../selectors/workout-date-filter';
import Graph from './Graph';
// import selectWorkouts from "../selectors/Workouts";

export const WorkoutList = (props) => (
  <div>
    {/* {
      selectNameFilter(props.workouts, props.text).map((workout) => (
        <WorkoutItem
          key={workout.id}
          {...workout}
        />
      ))
    } */}

    {/* {
      selectDateFilter(props.workouts).map((workout) => (
        <WorkoutItem
          key={workout.id}
          {...workout}
        />
      ))
    } */}
    <div className="content-container"> 
      <div className="dashboard-header">
        {/* Max Weight for {props.text}: {selectMaxWorkout(selectNameFilter(props.workouts, props.text))}lbs */}
        {/* Max Weight <br />  */}
        <div>5-rep<br/><span> Max</span></div>
        <div>{'Squat'}: <br /><span>{selectMaxWorkout(selectNameFilter(props.workouts, 'Squat'))}<span className="dashboard-header__label-subitem">lbs</span></span></div>
        <div>{'Bench'}: <br /><span>{selectMaxWorkout(selectNameFilter(props.workouts, 'Bench'))}<span className="dashboard-header__label-subitem">lbs</span></span></div>
        <div>{'Shoulder Press'}: <br /><span>{selectMaxWorkout(selectNameFilter(props.workouts, 'Shoulder Press'))}<span className="dashboard-header__label-subitem">lbs</span></span></div>
        <div>{'Deadlift'}: <br /><span>{selectMaxWorkout(selectNameFilter(props.workouts, 'Deadlift'))}<span className="dashboard-header__label-subitem">lbs</span></span></div>
    </div>

    {/* {
      !props.lastWorkout ? (
        <span><em>No recent workout activity</em></span>
      ) : (
          <WorkoutItem
        key={props.lastWorkout.id}
        {...props.lastWorkout}
      />
        )
  } */}
  
  
  </div>
    <hr />


    Recent activity:
    <div className="card-container"> 
      {
      props.workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          {...workout}
        />
      ))
    }
    </div>


  </div> 
);

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
    // text: 'Squat',
    lastWorkout: state.workouts[state.workouts.length-1]
    // workouts: selectWorkouts(state.workouts, state.fitlers)
  };
};

export default connect(mapStateToProps)(WorkoutList);