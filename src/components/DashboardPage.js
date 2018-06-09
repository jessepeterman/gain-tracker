import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div className="content-container">
    <Link className="button" to="/create">New Workout</Link>
    <h1 className="content-title">Workout Summary</h1>
    <p>Workout data here</p>
  </div>
);

export default DashboardPage;