import React from 'react';
import moment from 'moment';

const NewWorkoutPage = () => (
  <div className="content-container">
  <div className="content-title">
      <h1>Today's Workout: {moment().format("MM/DD/Y")}</h1>
    </div>
  <form className="entry" onSubmit="">
    <input placeholder="Exercise name" />
    <input placeholder="Weight in lbs" />
    <input placeholder="Sets" />
    <input placeholder="Reps" />
    <button >Save Workout</button>
  </form>
  </div>
);

export default NewWorkoutPage;