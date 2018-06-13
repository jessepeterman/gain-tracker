import React from 'react';
import moment from 'moment';

const now = moment().format('x');

export default (workouts) => {
  console.log(now);
  let dateArray = workouts.map((workout) => {
    console.log(workout.date);
    return moment(workout.date) === now
  });

  return dateArray;
};
