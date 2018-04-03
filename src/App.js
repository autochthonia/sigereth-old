import React, { Component } from 'react';

import Global from './layouts/Global';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Global>
        <Routes />
      </Global>
    );
  }
}

export default App;
