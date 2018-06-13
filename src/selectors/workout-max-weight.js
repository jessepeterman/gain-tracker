import React from 'react';

export default (workouts) => {
  let maxArray = 0;
  let max = 0;
  maxArray = workouts.map((workout) => workout.weight);

  if(maxArray.length >=1){
    max = maxArray.reduce((a, b) => a > b ? a : b );
  }
  return max;
}
