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
import workoutActiveDates from '../selectors/workout-active-dates';
import Graph from './Graph';
import chinUpIcon from '../../public/images/chin-ups.png';
import squatIcon from '../../public/images/squats.png';
import shoulderPressIcon from '../../public/images/shoulder-press-icon.png';
import deadLiftIcon from '../../public/images/deadlift-icon.png';
import benchPressIcon from '../../public/images/bench-press-icon.png';

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
    return (
      <div>
        <div className="zero-margin">
        </div>
        <Segment raised>
          <div className="max-summary centered zero-margin noBottomMargin">
            <Header as="h2" style={{ paddingRight: "2rem" }}>Current 5-Rep Max</Header>
            <Graph />
            <Segment.Group horizontal>
              <Segment><Popup trigger={<div><Image src={squatIcon} avatar /> <br /> <span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Squat'), 'weight')}<span className="dashboard-header__label-subitem">lbs</span></span> </div>} content={`Squat on ${moment(selectMaxWorkout(selectNameFilter(this.props.workouts, 'Squat'), 'date')).format('M/D')}`} /></Segment>
              <Segment><Popup trigger={<div><Image src={benchPressIcon} avatar /><br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Bench'), 'weight')}<span className="dashboard-header__label-subitem">lbs</span></span></div>} content={`Bench on ${moment(selectMaxWorkout(selectNameFilter(this.props.workouts, 'Bench'), 'date')).format('M/D')}`} /></Segment>
              <Segment><Popup trigger={<div><Image src={shoulderPressIcon} avatar /><br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Shoulder Press'), 'weight')}<span className="dashboard-header__label-subitem">lbs</span></span></div>} content={`Shoulder Press on ${moment(selectMaxWorkout(selectNameFilter(this.props.workouts, 'Shoulder Press'), 'date')).format('M/D')}`} /></Segment>
              <Segment><Popup trigger={<div><Image src={deadLiftIcon} avatar /><br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Deadlift'), 'weight')}<span className="dashboard-header__label-subitem">lbs</span></span></div>} content={`Deadlift on ${moment(selectMaxWorkout(selectNameFilter(this.props.workouts, 'Deadlift'), 'date')).format('M/D')}`} /></Segment>
            </Segment.Group>
          </div>
        </Segment>
        {
          <div>
            <WorkoutDayItem
              key={this.props.workouts.toString()}
              workouts={this.props.workoutsLastDate}
            />
            <SingleDatePicker
              date={this.state.date}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              isDayHighlighted={day => this.props.activeDates.includes(day.format('YYYYMMDD'))}
              numberOfMonths={1}
              isOutsideRange={() => { false }}
            />
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
                      this.props.workoutsSortedBySingleDatePicker.map((workout) => (
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
      </div >
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    workouts: state.workouts,
    lastWorkout: state.workouts[state.workouts.length - 1],
    lastDate: selectLastDateFilter(state.workouts),
    sortedWorkouts: sortDateMostRecentFilter(state.workouts),
    workoutsLastDate: selectDateFilter(state.workouts, selectLastDateFilter(state.workouts)),
    workoutsSortedBySingleDatePicker: selectDateFilter(state.workouts, state.filters.singleDate),
    activeDates: workoutActiveDates(state.workouts)
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSingleDate: (singleDate) => dispatch(setSingleDate(singleDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);