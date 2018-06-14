import React from 'react';
import DashboardPage from '../components/DashboardPage';
import NewWorkoutPage from '../components/NewWorkoutPage';
import WorkoutDayPage from '../components/WorkoutDayPage';
import MessageBoardPage from '../components/MessageBoardPage';
import MessageBoardPostForm from '../components/MessageBoardPostForm';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/messageboard" component={MessageBoardPage} exact />
        <PrivateRoute path="/messageboard/create" component={MessageBoardPostForm} />
          <PrivateRoute path="/create" component={NewWorkoutPage} />
          <PrivateRoute path="/edit" component={WorkoutDayPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
export default AppRouter;