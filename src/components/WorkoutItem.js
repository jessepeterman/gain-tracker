import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Table } from 'semantic-ui-react';

const WorkoutItem = ({ id, name, weight, sets, reps, date }) => (

  // <div className="workout-card">
  //   <div><h2>{moment(date).format('M/D')}</h2></div>
  //   {/* <div></div> */}
  //   <div><em>{name}</em></div>
  //   <div>{weight}lbs</div>
  //   <div>Sets: {sets}</div>
  //   <div>Reps: {reps}</div>
  // </div>


  <Table.Row>
    <Table.Cell>{moment(date).format('M/D')}</Table.Cell>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{weight}lbs</Table.Cell>
    <Table.Cell>{sets}x{reps}</Table.Cell>
  </Table.Row>




);

export default WorkoutItem;