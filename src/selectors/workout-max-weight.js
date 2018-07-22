import React from 'react';

export default (workouts, filter) => {
  let maxArray = 0;
  let max = 0;
  let obj = {};
  // maxArray = workouts.map((workout) => workout.weight);

  // if (maxArray.length >= 1) {
  //   max = maxArray.reduce((a, b) => a > b ? a : b);
  // }
  // return max;
  if (workouts.length >= 1) {
    obj = workouts.reduce((a, b) => a.weight > b.weight ? a : b);
  }

  return filter === 'weight' ? obj.weight : obj.date;
}
