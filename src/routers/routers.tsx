import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateTodo from 'pages/Create-Todo';
import DetailsTodoPage from 'pages/Details-Todo';
import Home from 'pages/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create-todo" component={CreateTodo} />
    <Route path="/todo/:id" component={DetailsTodoPage} />
  </Switch>
);

export default Routes;
