import React from 'react';

import { storiesOf } from '@storybook/react';

import { gracefulCraneStance, shockwaveTechnique } from '../../mocks/charm';
import Charm from '.';

storiesOf('molecules/Charm', module).add('examples', () => (
  <div>
      <h1>Simple</h1>
    <Charm {...gracefulCraneStance} />
    <h1>Complex</h1>
    <Charm {...shockwaveTechnique} />
  </div>
));
