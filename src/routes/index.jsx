import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

import ContainerCharmEditor from '../containers/ContainerCharmEditor';

const Routes = () => (
  <Router>
      <Route component={ContainerCharmEditor}/>
  </Router>
);

export default Routes;