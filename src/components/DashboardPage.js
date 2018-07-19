import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Header, Button, Segment } from 'semantic-ui-react';
import WorkoutSummary from '../components/WorkoutSummary';
// import { WorkoutListFilters } from './WorkoutListFilters';
import WorkoutFilter from '../components/WorkoutFilter';

const DashboardPage = (props) => {
  const { classes } = props;
  return (
    <Container>
      <Link className="button" to="/create"><Button primary>New Workout</Button></Link>
      <Header as='h1'>Workout Summary</Header>
      <WorkoutSummary />
    </Container>
  )
};


export default DashboardPage;