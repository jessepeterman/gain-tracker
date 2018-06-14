import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutSummary from '../components/WorkoutSummary';
// import { WorkoutListFilters } from './WorkoutListFilters';
import WorkoutFilter from '../components/WorkoutFilter';

const DashboardPage = () => (
  <div className="content-container">
    <Link className="button" to="/create">New Workout</Link>
    <Link className="button--green" to="/messageboard">Message Board</Link>
    <h1 className="content-title">Workout Summary</h1>
    {/* <WorkoutFilter /> */}
    <WorkoutSummary />
    
  </div>
);

export default DashboardPage;