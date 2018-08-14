import React from 'react';
import NewWorkoutForm from './NewWorkoutForm';
import { connect } from 'react-redux';
import { startAddWorkout } from '../actions/workouts';
import { Container, Message } from 'semantic-ui-react';

export class NewWorkoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: false,
      messageTimer: undefined
    };
  }

  componentWillUnmount() {
    clearTimeout(this.messageTimer);
  }



  onSubmit = (newWorkout) => {
    this.props.startAddWorkout(newWorkout);
    this.setState((prevState) => {
      return { message: true }
    });
    this.messageTimer = setTimeout(() => {
      this.setState(() => {
        return { message: false };
      });
    }, 1500);
    // this.props.history.push('/dashboard');
  };

  render() {
    return (
      <Container>
        {
          this.state.message && <Message positive><Message.Header>Workout saved</Message.Header></Message>
        }
        <div className="zero-margin">
          <NewWorkoutForm onSubmit={this.onSubmit} />
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddWorkout: (workout) => dispatch(startAddWorkout(workout))
})

export default connect(undefined, mapDispatchToProps)(NewWorkoutPage);