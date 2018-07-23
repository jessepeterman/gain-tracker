import React from 'react';
import moment from 'moment';

export default (workouts, filter) => {

  return workouts.map((workout) => moment(workout.date).format('YYYYMMDD'));
}