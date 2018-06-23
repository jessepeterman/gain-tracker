import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import WorkoutItem from './WorkoutItem';
import WorkoutDayItem from './WorkoutDayItem';
import { setSingleDate } from '../actions/filters';
import selectMaxWorkout from '../selectors/workout-max-weight';
import selectNameFilter from '../selectors/workout-name-filter';
import selectDateFilter from '../selectors/workout-date-filter';
import selectLastDateFilter from '../selectors/workout-last-date-filter';
import sortDateMostRecentFilter from '../selectors/sort-date-most-recent-filter';
import Graph from './Graph';
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
        <div className="content-container">
          <div className="dashboard-header">
            {/* Max Weight for {this.props.text}: {selectMaxWorkout(selectNameFilter(this.props.workouts, this.props.text))}lbs */}
            {/* Max Weight <br />  */}
            <div>5-rep<br /><span> Max</span></div>
            <div>{'Squat'}: <br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Squat'))}<span className="dashboard-header__label-subitem">lbs</span></span></div>
            <div>{'Bench'}: <br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Bench'))}<span className="dashboard-header__label-subitem">lbs</span></span></div>
            <div>{'Shoulder Press'}: <br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Shoulder Press'))}<span className="dashboard-header__label-subitem">lbs</span></span></div>
            <div>{'Deadlift'}: <br /><span>{selectMaxWorkout(selectNameFilter(this.props.workouts, 'Deadlift'))}<span className="dashboard-header__label-subitem">lbs</span></span></div>
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


        </div>
        <hr />


        Last workout:
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
            <br /><br />
            Workout history:
            <div className="card-container">
              {
                this.props.sortedWorkouts.map((workout) => (
                  <WorkoutItem
                    key={workout.id}
                    {...workout}
                  />
                ))
              }
            </div>
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