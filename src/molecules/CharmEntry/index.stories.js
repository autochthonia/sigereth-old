import { withStateHandlers } from 'recompose';
import React from 'react';

import { storiesOf } from '@storybook/react';

import CharmEntry from '.';

const CharmEntryWithState = withStateHandlers(
  {
    charm: {
      name: '',
      mins: '',
      type: '',
      keywords: '',
      duration: '',
      prereqs: '',
      text: '',
    },
  },
  { onChange: (state, props) => (value, key) => ({ ...state, charm: { ...state.charm, [key]: value } }) },
)(CharmEntry);

storiesOf('molecules/CharmEntry', module).add('examples', () => (
  <div>
    <CharmEntryWithState />
  </div>
));
