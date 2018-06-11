import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const WorkoutItem = ({ id, name, weight, sets, reps, time}) => (

  <div className="workout-card"> 
    <li><strong>{name}</strong></li>
    <li>Weight: {weight}</li>
    <li>Sets: {sets}</li>
    <li>Reps: {reps}</li>
    <li>Date: {moment(time).format('MDY')}</li>
  </div>
);

export default WorkoutItem;