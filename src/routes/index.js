import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DashBoard from '../pages/DashBoard';
import Profile from '../pages/Profile';
import NewMeet from '../pages/NewMeet';
import EditMeet from '../pages/EditMeet';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/dashboard" exact component={DashBoard} isPrivate />
      <Route path="/new" exact component={NewMeet} isPrivate />
      <Route path="/edit" exact component={EditMeet} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}
