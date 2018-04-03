import { withStateHandlers } from 'recompose';
import React from 'react';

import { storiesOf } from '@storybook/react';

import { demoCharm } from '../../mocks/charm';
import CharmEditor from '.';

const ConnectedCharmEditor = withStateHandlers(
  { charms: [], editable: false },
  {
    addCharm: (state, props) => payload => ({ ...state, charms: [...state.charms, { ...demoCharm }] }),
    onChange: (state, props) => (charm, index) => ({
      ...state,
      charms: state.charms.map((c, idx) => (index === idx ? charm : c)),
    }),
    toggleEditable: state => () => ({ ...state, editable: !state.editable }),
  },
)(CharmEditor);

storiesOf('pages/CharmEditor', module).add('charm tree', () => <ConnectedCharmEditor />);
