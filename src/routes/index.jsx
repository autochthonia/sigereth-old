import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from "react";

import ContainerCharmEditor from '../containers/ContainerCharmEditor';
import ContainerCombatTracker from '../containers/ContainerCombatTracker';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/gateway/:combatId" component={ContainerCombatTracker} />
      <Route component={ContainerCharmEditor}/>
    </Switch>
  </Router>
);

export default Routes;