import moment from 'moment';
import React from 'react';
import { Button, Container, Header, Segment, Step } from 'semantic-ui-react';
import chinUpIcon from '../../public/images/chin-ups.png';
import squatIcon from '../../public/images/squats.png';
import shoulderPressIcon from '../../public/images/shoulder-press-icon.png';
import deadLiftIcon from '../../public/images/deadlift-icon.png';
import benchPressIcon from '../../public/images/bench-press-icon.png';

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
  let date;
  let isWorkout = true;
  if (workouts.length === 0) {
    isWorkout = false;
  }
  workouts.map((workout) => {
    date = workout.date;
  })

  return (
    // <div>
    //   {console.log(props)}
    //   {items}
    //   hello
    // </div>
    // <div className="workout-day-container">
    <Segment raised>
      <div className="workout-day-view">
        {!isWorkout ?
          <h3 className="no-data-message"> <em>No workout data for this day</em></h3> :
          <Header as="h2">Last Workout: {moment(date).format('M/D')}</Header>
        }
        {
          workouts.map((workout) => (

            <Step.Group key={workout.id}>
              <div className="centered" >
                <Step>
                  <Step.Content >
                    {workout.name === "Chin-ups" && (<img src={chinUpIcon} style={{ height: "50px", width: "auto" }} />)}
                    {workout.name === "Squat" && (<img src={squatIcon} style={{ height: "50px", width: "auto" }} />)}
                    {workout.name === "Shoulder Press" && (<img src={shoulderPressIcon} style={{ height: "50px", width: "auto" }} />)}
                    {workout.name === "Deadlift" && (<img src={deadLiftIcon} style={{ height: "50px", width: "auto" }} />)}
                    {workout.name === "Bench" && (<img src={benchPressIcon} style={{ height: "50px", width: "auto" }} />)}
                    < Step.Title ><h2>{workout.weight ? workout.weight : "ø"}</h2></Step.Title>
                    {/* <Step.Description></Step.Description> */}
                    {workout.sets} x {workout.reps}
                  </Step.Content>
                </Step>
              </div>
            </Step.Group>

          ))
        }

      </div>
    </Segment>
    // </div >

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