import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker} from 'react-dates';
import { setTextFilter, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class WorkoutListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
onFocusChange = (calendarFocused) => {
  this.setState(() => ({ calendarFocused }))
};
onTextChange = (e) => {
  this.props.setTextFilter(e.target.value);
};
onSortChange = (e) => {
  if (e.target.value === 'date') {
    this.props.sortByDate();
  } 
  // else if (e.target.value === 'amount') {
  //   this.props.sortByAmount();
  // }
}
render(props) {
  return (
    <div>
        <div>
          <div>
            <input placeholder="Search expenses" type="text" value={this.props.filters.text}
            onChange={this.onTextChange}
          />
          </div>
          <div><select
            onChange={this.onSortChange}
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
          </select></div>
          <div >

            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
            </div>
        </div>
      </div>
  );
}
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => ({
  sortByDate: () => dispatch(sortByDate()),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListFilters);