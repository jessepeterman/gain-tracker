import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutSummary from '../components/WorkoutSummary';

const DashboardPage = () => (
  <div className="content-container">
    <Link className="button" to="/create">New Workout</Link>
    <h1 className="content-title">Workout Summary</h1>
    <WorkoutSummary />
  </div>
);

export default DashboardPage;