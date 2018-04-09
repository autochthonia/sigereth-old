import { css } from 'emotion';
import { debounce } from 'lodash';
import { withHandlers } from 'recompose';
import React from 'react';
import styled from 'react-emotion';
import { RIESelect, RIETextArea } from 'riek';

import { BodyDiv, H4, h4CSS, bodyCSS } from '../../styles/type';
import { charmTypes } from '../../mocks/charm';
import { mdBody } from '../../styles/markdown';
import Clear from '../../icons/Clear';
import Flex from '../../atoms/Flex';
import Section from '../../atoms/Section';
import TextEditor from '../../organisms/TextEditor';

const CharmWrapper = styled.div({
  ':not(:last-child)': {
    marginBottom: 24,
  },
});

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
      <TextEditor
        plain
        className={css(h4CSS)}
        content={name}
        editable={editable}
        placeholder="Charm name"
        onChange={name => onChange({ name })}
        name="name"
      />
      {editable &&
        (handleClickDelete || (console.error('handleClickDelete not provided to editable charm') && false)) && (
          <Clear
            alt="delete"
            onClick={handleClickDelete}
            className={css({ cursor: 'pointer', flexShrink: 0, flexBasis: 'auto' })}
          />
        )}
    </Flex>
    <Section size="small">
      <BodyDiv>
        <b>Cost:</b>{' '}
        <TextEditor
          plain
          content={cost}
          editable={editable}
          placeholder="1m"
          onChange={cost => onChange({ cost })}
          name="cost"
        />;&nbsp;
        <b>Mins:</b>{' '}
        <TextEditor
          plain
          content={mins}
          editable={editable}
          placeholder="Ability 1, Essence 1"
          onChange={mins => onChange({ mins })}
          name="mins"
        />
      </BodyDiv>
      <BodyDiv>
        <b>Type:</b>{' '}
        {editable ? (
          <RIESelect
            value={type}
            change={e => onChange(undefined, e.target.value)('type')}
            propName="type"
            options={charmTypes}
          />
        ) : (
          type.text
        )}
      </BodyDiv>
      <BodyDiv>
        <b>Keywords:</b>{' '}
        <TextEditor
          plain
          content={keywords}
          editable={editable}
          placeholder="None"
          onChange={keywords => onChange({ keywords })}
          name="keywords"
        />
      </BodyDiv>
      <BodyDiv>
        <b>Duration:</b>{' '}
        <TextEditor
          plain
          content={duration}
          editable={editable}
          placeholder="Instant"
          onChange={duration => onChange({ duration })}
          name="duration"
        />
      </BodyDiv>
      <BodyDiv>
        <b>Prerequisite Charms:</b>{' '}
        <TextEditor
          plain
          content={prereqs}
          editable={editable}
          placeholder="None"
          onChange={prereqs => onChange({ prereqs })}
          name="prereqs"
        />
      </BodyDiv>
    </Section>

    {editable ? (
      <RIETextArea
        rows="8"
        className={css({ width: '100%', minWidth: '100%', maxWidth: '100%', ...bodyCSS })}
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
