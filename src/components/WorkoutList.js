import React from 'react';
import { connect } from 'react-redux';
import WorkoutItem from './WorkoutItem';
import Graph from './Graph';
// import selectWorkouts from "../selectors/Workouts";

export const WorkoutList = (props) => (
  <div className=""> 
    <div className="workout-card-recent">
    {
      !props.lastWorkout ? (
        <div> <span><em>No recent workout activity</em></span></div>
      ) : (
        <div>
          <WorkoutItem
            key={props.lastWorkout.id}
            {...props.lastWorkout}
          />
            <Graph />
          </div>
        )
    }
    </div>
    
    <hr />

    <div className="graph">
      {/* <Graph workouts={props.workouts}/> */}
    </div>


    Most recent activity:
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
    lastWorkout: state.workouts[state.workouts.length-1]
    // workouts: selectWorkouts(state.workouts, state.fitlers)
  };
};

export default connect(mapStateToProps)(WorkoutList);