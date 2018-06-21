import React from 'react';
import moment from 'moment';

const now = moment();

export default (workouts, day) => {
  let dateArray = workouts.filter((workout) => {
    return moment(workout.date).isSame(day, 'day');
  });

  return dateArray;
};
