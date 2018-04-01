import React from 'react';

import { storiesOf } from '@storybook/react';

import { bloodApe } from '../../mocks/character';
import QuickCharacter from '.';

storiesOf('molecules/QuickCharacter', module).add('basic', () => <QuickCharacter {...bloodApe} />);
