import React from 'react';
import moment from 'moment';

const now = moment();

export default (workouts) => {
  let sortedWorkoutsAlphabetically = workouts.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedWorkouts;
}