import React from 'react';
import styled from 'react-emotion';

import { storiesOf } from '@storybook/react';

import { H1, H2, H3, H4, H5, H6, Body, BodyDiv, BodyP } from './type';
import Section from '../atoms/Section';

storiesOf('styles/type', module).add('basic', () => (
  <div>
    {[H1, H2, H3, H4, H5, H6].map((C, idx) => (
      <Section size="medium" key={idx}>
        <C>H{idx + 1}: Hello World</C>
        <C>1234567890</C>
      </Section>
    ))}
    {[Body, BodyDiv, BodyP].map((C, idx) => (
      <Section size="medium" key={idx}>
        <C>Body: Hunting Hawk's instant-duration Evocations</C>
      </Section>
    ))}
    <Body>1234567890</Body>
  </div>
));
