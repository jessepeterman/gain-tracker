import React from 'react';
import moment from 'moment';

const now = moment();

export default (workouts) => {
  let sortedWorkouts = workouts.sort((a, b) => b.date - a.date);
  return sortedWorkouts;
}


