import React from 'react';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'react-emotion';

import { Body, BodyP, H4 } from '../../styles/type';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

const CharmWrapper = styled.div({
  ':not(:last-child)': {
    marginBottom: 24,
  },
});
const Name = H4;
const Cost = Body;
const Mins = Body;
const Type = BodyP;

const Keywords = BodyP;

const Duration = BodyP;

const Prereqs = BodyP;
const CharmText = styled(BodyP)({
  marginTop: 12,
  p: {
    margin: 0,
    ':not(:last-child)': {
      marginBottom: 8,
    },
  },
});

const Charm = ({ name, cost, mins, type, keywords, duration, prereqs, text }) => (
  <CharmWrapper>
    <Name>{name}</Name>
    <div>
      <Cost>
        <b>Cost:</b> {cost};&nbsp;
      </Cost>
      <Mins>
        <b>Mins:</b> {mins}
      </Mins>
    </div>
    <Type>
      <b>Type:</b> {type}
    </Type>
    <Keywords>
      <b>Keywords:</b> {keywords}
    </Keywords>
    <Duration>
      <b>Duration:</b> {duration}
    </Duration>
    <Prereqs>
      <b>Prerequisite Charms:</b> {prereqs}
    </Prereqs>
    <CharmText>{md.render(text)}</CharmText>
  </CharmWrapper>
);

export default Charm;
