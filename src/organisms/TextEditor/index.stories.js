import { withStateHandlers } from 'recompose';
import React from 'react';

import { storiesOf } from '@storybook/react';

import TextEditor from '.';

storiesOf('organisms/TextEditor', module).add('charm tree', () => (
  <div>
    <h1>Single</h1>
    <label>Single Label</label>
    <TextEditor content="This is single line content"/>
    <label>Single Label</label>
    <TextEditor content="This is single line content too"/>
    <h1>Multi</h1>
    <label>Multi Label</label>
    <TextEditor multi content="This is multiline content"/>
    <label>Multi Label</label>
    <TextEditor multi content="This is multiline content too"/>
    <label>Number</label>
    <TextEditor number />
  </div>
));
