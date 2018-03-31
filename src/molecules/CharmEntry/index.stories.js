import React from 'react';

import { storiesOf } from '@storybook/react';

import CharmEntry from '.';

storiesOf('molecules/CharmEntry', module)
  .add('examples', () => (
    <div>
      <CharmEntry />
    </div>
  ))
