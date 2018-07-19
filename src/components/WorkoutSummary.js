import React from 'react';
// import {connect} from 'react-redux';
import WorkoutList from './WorkoutList';
import { WorkoutItemLast } from './WorkoutItemLast';
import Graph from './Graph';
// import selectWorkouts from "../selectors/workouts";

const WorkoutSummary = () => (
  <div className="centered">
    <WorkoutList />
  </div>
);

export default WorkoutSummary;