import React from 'react';
import moment from 'moment';

const now = moment();

export default (workouts) => {

  let mostRecentDate = 0;
  workouts.forEach((workout) => {
    if (workout.date > mostRecentDate) {
      mostRecentDate = workout.date
    }
  });
  return mostRecentDate;

}

