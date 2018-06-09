import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
  <div className="box">
  <div className="slide">
    <div className="box-layout">
  <div className="box-layout__box">
    <h1 className="box-layout__title">Gain Tracker</h1>
      <p>Track your gains.<br/>Gain muscle.<br/>Lose fat.<br/>Get fit.</p>
    <button className="button" onClick={startLogin}>Login with Google</button> 
    </div>
  </div>
  </div>
  </div>
)
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);