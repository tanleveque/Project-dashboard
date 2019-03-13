import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Container/Main';
import Admin from './Container/Admin';

export default class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Main" exact component={Main} />
        <Route path="/Admin" exact component={Admin} />
      </Switch>
    );
  }
}
