import React from 'react';
import moment from 'moment';
import NumericInput from 'react-numeric-input';
import { SingleDatePicker } from 'react-dates';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import chinUpIcon from '../../public/images/chin-ups.png';
import squatIcon from '../../public/images/squats.png';
import shoulderPressIcon from '../../public/images/shoulder-press-icon.png';
import deadLiftIcon from '../../public/images/deadlift-icon.png';
import benchPressIcon from '../../public/images/bench-press-icon.png';
const now = moment();

export default class NewWorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Squat',
      weight: 135,
      sets: 3,
      reps: 5,
      note: '',
      date: moment(),
      calendarFocused: false
    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }
  onWeightChange = (e) => {
    if (this.state.weight === 0) {
      this.setState(() => ({ weight: '' }));
      this.setState(this.state);
    }
    const weight = Number(e.target.value);
    this.setState(() => ({ weight }));
  }
  onSetsChange = (e) => {
    const sets = Number(e.target.value);
    // const sets = e.target.value;
    this.setState(() => ({ sets }));
  }
  onRepsChange = (e) => {
    const reps = Number(e.target.value);
    this.setState(() => ({ reps }));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onDateChange = (date) => {
    this.setState(() => ({ date }));
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }
  onIncrementWeight = (e) => {
    e.preventDefault();
    if (this.state.weight === '') {
      this.setState(() => ({ weight: 0 + 5 }))
    } else {
      this.setState(() => ({ weight: this.state.weight + 5 }))
    }

  }
  onDecrementWeight = (e) => {
    e.preventDefault();
    if (this.state.weight >= 5) {
      this.setState(() => ({ weight: this.state.weight - 5 }))
    }
  }
  onIncrementSets = (e) => {
    e.preventDefault();
    if (this.state.sets === '') {
      this.setState(() => ({ sets: 0 + 1 }))
    } else {
      this.setState(() => ({ sets: this.state.sets + 1 }))
    }

  }
  onDecrementSets = (e) => {
    e.preventDefault();
    if (this.state.sets >= 2) {
      this.setState(() => ({ sets: this.state.sets - 1 }))
    }
  }
  onIncrementReps = (e) => {
    e.preventDefault();
    if (this.state.reps === '') {
      this.setState(() => ({ reps: 0 + 1 }))
    } else {
      this.setState(() => ({ reps: this.state.reps + 1 }))
    }

  }
  onDecrementReps = (e) => {
    e.preventDefault();
    if (this.state.reps >= 2) {
      this.setState(() => ({ reps: this.state.reps - 1 }))
    }
  }
  handleFocus = (e) => {
    e.target.select();
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      weight: this.state.weight,
      sets: this.state.sets,
      reps: this.state.reps,
      note: this.state.note,
      date: this.state.date.valueOf()
    });
  };

  render() {
    const center = { textAlign: 'center' };
    return (
      <div className="centered" >
        <Card>
          <Card.Content>
            <Card.Header>Today's Workout</Card.Header>
            <SingleDatePicker
              date={this.state.date}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => { false }}
            />
            <form className="entry" onSubmit={this.onSubmit}>
              {/* <input className="entry-item" placeholder="Exercise name" onChange={this.onNameChange} /> */}
              {this.state.name === "Chin-ups" && (<img src={chinUpIcon} style={{ height: "50px", width: "auto", paddingRight: "1rem" }} />)}
              {this.state.name === "Squat" && (<img src={squatIcon} style={{ height: "50px", width: "auto", paddingRight: "1rem" }} />)}
              {this.state.name === "Shoulder Press" && (<img src={shoulderPressIcon} style={{ height: "50px", width: "auto", paddingRight: "1rem" }} />)}
              {this.state.name === "Deadlift" && (<img src={deadLiftIcon} style={{ height: "50px", width: "auto", paddingRight: "1rem" }} />)}
              {this.state.name === "Bench" && (<img src={benchPressIcon} style={{ height: "50px", width: "auto", paddingRight: "1rem" }} />)}
              <select className="entry-item" placeholder="Exercise name" value={this.state.name} onChange={this.onNameChange}>
                <option value="Squat">Squat</option>
                <option value="Bench">Bench</option>
                <option value="Shoulder Press">Shoulder Press</option>
                <option value="Deadlift">Deadlift</option>
                <option value="Chin-ups">Chin-ups</option>
              </select>
              <Card.Description>Weight: <button className="increment-button" onClick={this.onDecrementWeight}>-</button>
                <input onFocus={this.handleFocus} style={center} type="number" className="entry-input entry-item" value={this.state.weight} placeholder="" onChange={this.onWeightChange} />
                <button className="increment-button" onClick={this.onIncrementWeight}>+</button>

                Sets: <button className="increment-button" onClick={this.onDecrementSets}>-</button>
                <input onFocus={this.handleFocus} style={center} type="number" className="entry-input entry-item" value={this.state.sets} placeholder="" onChange={this.onSetsChange} />
                <button className="increment-button" onClick={this.onIncrementSets}>+</button>
                Reps: <button className="increment-button" onClick={this.onDecrementReps}>-</button>
                <input onFocus={this.handleFocus} style={center} type="number" className="entry-input entry-item" value={this.state.reps} placeholder="" onChange={this.onRepsChange} />
                <button className="increment-button" onClick={this.onIncrementReps}>+</button>

              </Card.Description></form>
          </Card.Content>
          <Card.Content extra>
            <textarea className="text-area entry-item" placeholder="Notes" onChange={this.onNoteChange} />
            <Button primary className="button">Save Workout</Button>
          </Card.Content>


        </Card>
      </div >


    )
  }
};
