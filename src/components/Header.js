import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';

export const Header = ({ startLogout }) => (
  <Container>
    <div className="header">
      <Link to="/dashboard"><h1>Gain Tracker</h1></Link>
      <Button basic onClick={startLogout}>Logout</Button>
    </div>
  </Container >
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
