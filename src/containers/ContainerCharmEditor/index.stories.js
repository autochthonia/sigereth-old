import { withStateHandlers } from 'recompose';
import React from 'react';

import { storiesOf } from '@storybook/react';

import { gracefulCraneStance } from '../../mocks/charm';
import ContainerCharmEditor from '.';

// const ContainerCharmEditor = withStateHandlers(
//   { charms: [], editable: true },
//   {
//     addCharm: (state, props) => payload => ({ ...state, charms: [...state.charms, { ...gracefulCraneStance }] }),
//     onChange: (state, props) => (charm, index) => ({
//       ...state,
//       charms: state.charms.map((c, idx) => (index === idx ? charm : c)),
//     }),
//     toggleEditable: state => () => ({ ...state, editable: !state.editable }),
//   },
// )(ContainerCharmEditor);

storiesOf('containers/ContainerCharmEditor', module).add('charm tree', () => <ContainerCharmEditor />);
