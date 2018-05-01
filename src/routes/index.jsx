import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import React from 'react';

import ContainerCharmEditor from '../containers/ContainerCharmEditor';
import ContainerCombatTracker from '../containers/ContainerCombatTracker';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/gateway/:combatId" component={ContainerCombatTracker} />
      {/* <Route component={ContainerCharmEditor}/> */}
      <Redirect to="/gateway/cjfynjkl828s701300way4455" />
    </Switch>
  </Router>
);

export default Routes;
