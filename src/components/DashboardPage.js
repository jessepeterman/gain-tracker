import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Header, Button, Segment } from 'semantic-ui-react';
import WorkoutSummary from '../components/WorkoutSummary';
// import { WorkoutListFilters } from './WorkoutListFilters';
import WorkoutFilter from '../components/WorkoutFilter';

const DashboardPage = (props) => {
  const { classes } = props;
  return (
    // <div className="content-container">
    <Container>
      <Link className="button" to="/create"><Button primary>New Workout</Button></Link>
      {/* <Button>
        New Workout
      </Button> */}
      <Header as='h1'>Workout Summary</Header>
      {/* <WorkoutFilter /> */}
      <WorkoutSummary />
    </Container>
    // </div >
  )
};


export default DashboardPage;