import { css } from 'emotion';
import React from 'react';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'react-emotion';

import { RIEInput, RIESelect, RIETextArea } from 'riek';

import { BodyDiv, BodyP, H4 } from '../../styles/type';
import { charmTypes } from '../../mocks/charm';
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

const Charm = ({ name, cost, mins, type, keywords, duration, prereqs, text, editable, onChange }) => (
  <CharmWrapper>
    {editable ? 'true' : 'false'}
    <H4>{editable ? <RIEInput value={name} change={onChange} propName="name" /> : name}</H4>
    <BodyDiv>
      <b>Cost:</b> {editable ? <RIEInput value={cost} change={onChange} propName="cost" /> : cost};&nbsp;
      <b>Mins:</b> {editable ? <RIEInput value={mins} change={onChange} propName="mins" /> : mins}
    </BodyDiv>
    <BodyDiv>
      <b>Type:</b>{' '}
      {editable ? <RIESelect value={type} change={onChange} propName="type" options={charmTypes} /> : type.text}
    </BodyDiv>
    <BodyDiv>
      <b>Keywords:</b> {keywords}
    </BodyDiv>
    <BodyDiv>
      <b>Duration:</b> {duration}
    </BodyDiv>
    <BodyDiv>
      <b>Prerequisite Charms:</b> {editable ? <RIEInput value={prereqs} change={onChange} propName="prereqs" /> : prereqs}
    </BodyDiv>
    {editable ? <RIETextArea rows="12" className={css({width: '100%'})} value={text} change={onChange} propName="text" /> : mdBody.render(text)}
  </CharmWrapper>
);

export default Charm;
