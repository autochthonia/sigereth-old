import { css } from 'emotion';
import React from 'react';
import styled from 'react-emotion';

import { RIEInput, RIESelect, RIETextArea } from 'riek';

import { BodyDiv, BodyP, H4 } from '../../styles/type';
import { charmTypes } from '../../mocks/charm';
import { mdBody } from '../../styles/markdown';
import Clear from '../../icons/Clear';
import Flex from '../../atoms/Flex';
import Section from '../../atoms/Section';

const CharmWrapper = styled.div({
  ':not(:last-child)': {
    marginBottom: 24,
  },
});

const StyledRIETextArea = BodyP.withComponent(RIETextArea);

const Charm = ({
  name,
  cost,
  mins,
  type,
  keywords,
  duration,
  prereqs,
  text,
  editable,
  onChange,
  handleClickDelete,
}) => (
  <CharmWrapper>
    <Flex justifyContent="space-between">
      <H4>{editable ? <RIEInput value={name} change={onChange} propName="name" /> : name}</H4>
      {editable &&
        (handleClickDelete || (console.error('handleClickDelete not provided to editable charm') && false)) && (
          <Clear alt="delete" onClick={handleClickDelete} className={css({ cursor: 'pointer' })} />
        )}
    </Flex>
    <Section size="small">
      <BodyDiv>
        <b>Cost:</b> {editable ? <RIEInput value={cost} change={onChange} propName="cost" /> : cost};&nbsp;
        <b>Mins:</b> {editable ? <RIEInput value={mins} change={onChange} propName="mins" /> : mins}
      </BodyDiv>
      <BodyDiv>
        <b>Type:</b>{' '}
        {editable ? <RIESelect value={type} change={onChange} propName="type" options={charmTypes} /> : type.text}
      </BodyDiv>
      <BodyDiv>
        <b>Keywords:</b> {editable ? <RIEInput value={keywords} change={onChange} propName="keywords" /> : keywords}
      </BodyDiv>
      <BodyDiv>
        <b>Duration:</b> {editable ? <RIEInput value={duration} change={onChange} propName="duration" /> : duration}
      </BodyDiv>
      <BodyDiv>
        <b>Prerequisite Charms:</b>{' '}
        {editable ? <RIEInput value={prereqs} change={onChange} propName="prereqs" /> : prereqs}
      </BodyDiv>
    </Section>

    {editable ? (
      <StyledRIETextArea
        rows="8"
        className={css({ width: '100%', minWidth: '100%', maxWidth: '100%' })}
        value={text}
        change={onChange}
        propName="text"
      />
    ) : (
      mdBody.render(text)
    )}
  </CharmWrapper>
);

export default Charm;
