import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';

function PublicRoutes() {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default PublicRoutes;
