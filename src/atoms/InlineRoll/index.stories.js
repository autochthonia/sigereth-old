import React from 'react';

import { storiesOf } from '@storybook/react';

import InlineRoll from '.';
import Section from '../Section';

storiesOf('atoms/InlineRoll', module)
  .add('basic', () => <InlineRoll dice={1} />)
  .add('multiple', () => (
    <Section>
      <InlineRoll dice={1} />
      <InlineRoll dice={12} />
    </Section>
  ));
