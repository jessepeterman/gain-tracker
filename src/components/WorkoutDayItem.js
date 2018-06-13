import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const WorkoutItem = (props) => {

  const workouts = props.workouts;
//   const items = workouts.map((workout) =>
//       <div>
//       <li><strong>{workout.name}</strong></li>
//       <li>Weight: {workout.weight}</li>
//       <li>Sets: {workout.sets}</li>
//       <li>Reps: {workout.reps}</li>
//       </div>
// );

return (
  // <div>
  //   {console.log(props)}
  //   {items}
  //   hello
  // </div>
  <div>{
  workouts.map((workout) => (
    <ul>
      <li><strong>{workout.name}</strong></li>
        <li>Weight: {workout.weight}</li>
        <li>Sets: {workout.sets}</li>
        <li>Reps: {workout.reps}</li>
      {/* <li>Date: {moment(date).format('M/D')} </li> */}
      </ul>
  ))
}
  </div>


  // <div className="workout-card">
  //   <li><strong>{name}</strong></li>
  //   <li>Weight: {weight}</li>
  //   <li>Sets: {sets}</li>
  //   <li>Reps: {reps}</li>
  //   <li>Date: {moment(date).format('M/D')} </li>
  // </div>
  );
}

export default WorkoutItem;