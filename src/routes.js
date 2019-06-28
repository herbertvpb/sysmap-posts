import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/Post';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/comments" exact component={Post} />
    </Switch>
  );
}

export default Routes;
