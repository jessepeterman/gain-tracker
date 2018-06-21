import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const WorkoutItem = ({ id, name, weight, sets, reps, date }) => (

  <div className="workout-card">
    <div><h2>{moment(date).format('M/D')}</h2></div>
    {/* <div></div> */}
    <div><em>{name}</em></div>
    <div>{weight}lbs</div>
    <div>Sets: {sets}</div>
    <div>Reps: {reps}</div>
  </div>
);

export default WorkoutItem;