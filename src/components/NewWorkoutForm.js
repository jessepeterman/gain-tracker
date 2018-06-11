import React from 'react';
import moment from 'moment';
import NumericInput from 'react-numeric-input';

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
      date: ''
    }
  }
  
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  }
  onWeightChange = (e) => {
    const weight = Number(e.target.value);
    this.setState(() => ({weight}));
  }
  onSetsChange = (e) => {
    const sets = Number(e.target.value);
    // const sets = e.target.value;
    this.setState(() => ({ sets }));
  }
  onRepsChange = (e) => {
    const reps = Number(e.target.value);
    this.setState(() => ({reps }));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      weight: this.state.weight,
      sets: this.state.sets,
      reps: this.state.reps,
      note: this.state.note,
      date: moment().format("x")
    });
  };

render() {
  return (
 <div className="content-container">
  <div className="content-title">
    <h1 className="workout__title">Today's Workout: {moment().format("MM/DD/Y")}</h1>
  </div>
  <form className="entry" onSubmit={this.onSubmit}>
        {/* <input className="entry-item" placeholder="Exercise name" onChange={this.onNameChange} /> */}
        <select className="entry-item" placeholder="Exercise name" value={this.state.name} onChange={this.onNameChange}>
          <option value="Squat">Squat</option>
          <option value="Bench">Bench</option>
          <option value="Shoulder Press">Shoulder Press</option>
          <option value="Deadlift">Deadlift</option>
          <option value="Chin-ups">Chin-ups</option>
          </select>
        <li>Weight: <input type="number" className="entry-input entry-item" value={this.state.weight} placeholder="135" onChange={this.onWeightChange} /></li>
        <li>Sets: <input type="number" className="entry-input entry-item" placeholder="3" value={this.state.sets} onChange={this.onSetsChange}/></li>
        <li>Reps: <input type="number" className="entry-input entry-item" placeholder="5" value={this.state.reps} onChange={this.onRepsChange}/></li>
        <textarea className="text-area entry-item" placeholder="Notes" onChange={this.onNoteChange} />
    <button className="button">Save Workout</button>
  </form>
</div>


    )
  } 
};
