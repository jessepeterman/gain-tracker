import React from 'react';
// import {connect} from 'react-redux';
import WorkoutList from './WorkoutList';
import { WorkoutItemLast } from './WorkoutItemLast';
// import selectWorkouts from "../selectors/workouts";

const WorkoutSummary = () => (
  <div>
    {/* <WorkoutItemLast /> */}
    <WorkoutList />

    </div>
);

export default WorkoutSummary;