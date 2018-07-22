import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Header, Popup, Table, Segment } from 'semantic-ui-react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import WorkoutItem from './WorkoutItem';
import WorkoutDayItem from './WorkoutDayItem';
import { setSingleDate } from '../actions/filters';
import selectMaxWorkout from '../selectors/workout-max-weight';
import selectMaxWorkoutObject from '../selectors/workout-max-weight-object';
import selectNameFilter from '../selectors/workout-name-filter';
import selectDateFilter from '../selectors/workout-date-filter';
import selectLastDateFilter from '../selectors/workout-last-date-filter';
import sortDateMostRecentFilter from '../selectors/sort-date-most-recent-filter';
import Graph from './Graph';
import chinUpIcon from '../../public/images/chin-ups.png';
import squatIcon from '../../public/images/squats.png';
import shoulderPressIcon from '../../public/images/shoulder-press-icon.png';
import deadLiftIcon from '../../public/images/deadlift-icon.png';
import benchPressIcon from '../../public/images/bench-press-icon.png';
// import selectWorkouts from "../selectors/Workouts";

const now = moment();

export class WorkoutList extends React.Component {
  constructor() {
    super();
    this.state = {
      date: moment(),
      calendarFocused: false
    }
  }

  onDateChange = (singleDate) => {
    this.props.setSingleDate(singleDate);
    this.setState(() => ({ date: singleDate }));
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }
  componentDidMount() {
    this.props.setSingleDate(this.props.workoutLastDate);
    this.setState(() => ({ date: this.props.workoutLastDate }));
  }

  render() {
    // console.log(this.props.lastWorkout); // assign this date to workoutsbydayarray for auto fill
    return (
      <div>
        {/* {
      selectNameFilter(props.workouts, props.text).map((workout) => (
        <WorkoutItem
          key={workout.id}
          {...workout}
        />
      ))
    } */}

        {/* {
      selectDateFilter(this.props.workouts).map((workout) => (
        <WorkoutItem
          key={workout.id}
          {...workout}
        />
      ))
    } */}
        <div className="zero-margin">
        </div>
        <Segment raised>
          <div className="max-summary centered zero-margin noBottomMargin">
            {/* Max Weight for {this.props.text}: {selectMaxWorkout(selectNameFilter(this.props.workouts, this.props.text))}lbs */}
            {/* Max Weight <br />  */}
            <Header as="h2" style={{ paddingRight: "2rem" }}>Current 5-Rep Max</Header>
            {/* <h2>Current 5-Rep Max</h2> */}
            {/* <hr /> */}
            <Graph />
            <Segment.Group horizontal>
              {/* <div>5-rep<br /><span> Max</span></div> */}
              <Segment><Popup trigger={<div><Image src={squatIcon} avatar /> <br /> <span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Squat'), 'weight')}<span className="dashboard-header__label-subitem">lbs</span></span> </div>} content={`Squat on ${moment(selectMaxWorkout(selectNameFilter(this.props.workouts, 'Squat'), 'date')).format('M/D')}`} /></Segment>
              <Segment><Popup trigger={<div><Image src={benchPressIcon} avatar /><br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Bench'), 'weight')}<span className="dashboard-header__label-subitem">lbs</span></span></div>} content={`Bench on ${moment(selectMaxWorkout(selectNameFilter(this.props.workouts, 'Bench'), 'date')).format('M/D')}`} /></Segment>
              <Segment><Popup trigger={<div><Image src={shoulderPressIcon} avatar /><br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Shoulder Press'), 'weight')}<span className="dashboard-header__label-subitem">lbs</span></span></div>} content={`Shoulder Press on ${moment(selectMaxWorkout(selectNameFilter(this.props.workouts, 'Shoulder Press'), 'date')).format('M/D')}`} /></Segment>
              <Segment><Popup trigger={<div><Image src={deadLiftIcon} avatar /><br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Deadlift'), 'weight')}<span className="dashboard-header__label-subitem">lbs</span></span></div>} content={`Deadlift on ${moment(selectMaxWorkout(selectNameFilter(this.props.workouts, 'Deadlift'), 'date')).format('M/D')}`} /></Segment>
            </Segment.Group>
          </div>

          {/* {
      !props.lastWorkout ? (
        <span><em>No recent workout activity</em></span>
      ) : (
          <WorkoutItem
        key={props.lastWorkout.id}
        {...props.lastWorkout}
      />
        )
  } */}

        </Segment>
        {
          <div>
            <WorkoutDayItem
              key={this.props.workouts.toString()}
              workouts={this.props.workoutsLastDate}
            />
            {/* <SingleDatePicker
              date={this.state.date}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => { false }}
            /> */}
            <Segment raised style={{ textAlign: 'center' }}>
              <h3>Workout history</h3>
              <div className="card-container">
                <Table striped textAlign='center'>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Date</Table.HeaderCell>
                      <Table.HeaderCell>Workout</Table.HeaderCell>
                      <Table.HeaderCell>Weight</Table.HeaderCell>
                      <Table.HeaderCell>Reps/Sets</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>


                    {
                      this.props.sortedWorkouts.map((workout) => (
                        <WorkoutItem
                          key={workout.id}
                          {...workout}
                        />
                      ))
                    }
                  </Table.Body>
                </Table>
              </div>
            </Segment>
          </div>
        }

        {/* <div className="card-container"> */}
        {
          // this.props.workouts.map((workout) => (
          //   <WorkoutItem
          //     key={workout.id}
          //     {...workout}
          //   />
          // ))
        }

        {/* </div> */}


      </div >
    );
  };
};

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts,
    // text: 'Squat',
    lastWorkout: state.workouts[state.workouts.length - 1],
    lastDate: selectLastDateFilter(state.workouts),
    sortedWorkouts: sortDateMostRecentFilter(state.workouts),
    workoutsLastDate: selectDateFilter(state.workouts, selectLastDateFilter(state.workouts))
    // workoutsSorted: sortDateMostRecentFilter()
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSingleDate: (singleDate) => dispatch(setSingleDate(singleDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);