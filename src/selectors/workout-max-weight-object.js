import React from 'react';

export default (workouts) => {
  let max = 0;
  let obj = {};

  if (workouts.length >= 1) {
    obj = workouts.reduce((a, b) => a.weight > b.weight ? a : b);
    return obj;
  }
}
