import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Button, Card } from 'semantic-ui-react';

export const LoginPage = ({ startLogin }) => (
  <div className="login-page-container">
    <div className="login-page__box">
      <Card style={{ backgroundColor: "rgba(255, 255, 255, .8)" }}>
        <Card.Content textAlign="center">
          <Card.Header style={{ paddingBottom: "0" }}>Gain Tracker</Card.Header>
          <Card.Description>Track your gains.<br />Gain muscle.<br />Lose fat.<br />Get fit.</Card.Description>
          <Button primary onClick={startLogin}><span style={{ fontWeight: "300" }}>Login with Google</span></Button>
        </Card.Content>
      </Card>
    </div>
  </div >
)
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);