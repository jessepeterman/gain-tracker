import React from 'react';
import NewWorkoutForm from './NewWorkoutForm';
import { connect } from 'react-redux';
import {startAddWorkout} from '../actions/workouts';

export class NewWorkoutPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      message: false
    };
  }
  
  
  onSubmit = (newWorkout) => {
    this.props.startAddWorkout(newWorkout);
    this.setState((prevState) => {
      return { message: true }
    });
    setTimeout(() => {
      this.setState((prevState) => {
        return { message: false }
      });
    }, 1500);
    // this.props.history.push('/dashboard');
  };

  render() {
    return ( 
      <div>
        {
          this.state.message &&  <p className="message">Workout saved</p>
        }
        <NewWorkoutForm onSubmit = { this.onSubmit } />
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddWorkout: (workout) => dispatch(startAddWorkout(workout))
})

export default connect(undefined, mapDispatchToProps)(NewWorkoutPage);