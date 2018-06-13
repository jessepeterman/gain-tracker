import React from 'react';

export default (workouts, text) => {

  let nameArray = [];
  nameArray = workouts.filter((workout) => workout.name === text );
  
  return nameArray;
};