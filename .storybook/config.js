import React from 'react';

import { configure, addDecorator } from '@storybook/react';

import Global from '../src/layouts/Global';

const req = require.context('../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => <Global>{storyFn()}</Global>);

configure(loadStories, module);
