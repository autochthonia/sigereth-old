import React from 'react';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'react-emotion';

import { Body, BodyDiv, BodyP, H4 } from '../../styles/type';
import { mdBody } from '../../styles/markdown';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

const CharmWrapper = styled.div({
  ':not(:last-child)': {
    marginBottom: 24,
  },
});

const CharmText = styled(BodyP)({
  marginTop: 12,
  p: {
    margin: 0,
    ':not(:last-child)': {
      marginBottom: 8,
    },
  },
});

const Charm = ({ name, cost, mins, type, keywords, duration, prereqs, text, editable }) => (
  <CharmWrapper>
    <H4>{name}</H4>
    <BodyDiv>
      <b>Cost:</b> {cost};&nbsp;
      <b>Mins:</b> {mins}
    </BodyDiv>
    <BodyDiv>
      <b>Type:</b> {type}
    </BodyDiv>
    <BodyDiv>
      <b>Keywords:</b> {keywords}
    </BodyDiv>
    <BodyDiv>
      <b>Duration:</b> {duration}
    </BodyDiv>
    <BodyDiv>
      <b>Prerequisite Charms:</b> {prereqs}
    </BodyDiv>
    {mdBody.render(text)}
  </CharmWrapper>
);

export default Charm;
