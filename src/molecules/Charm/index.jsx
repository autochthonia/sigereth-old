import PropTypes from 'prop-types';
import React from 'react';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'react-emotion';

import colors from '../../styles/colors';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

const CharmWrapper = styled.div({
  fontFamily: "'Crimson Text', serif",
  fontSize: '1em',
  ':not(:last-child)': {
      marginBottom: 24,
  }
});
const Name = styled.h1({
  color: colors.blue,
  margin: 0,
  fontVariant: 'small-caps',
  fontSize: '1.2em',
  fontFamily: "'Vollkorn SC', serif",
});
const Cost = styled.span({});
const Mins = styled.span({});
const Type = styled.div({});

const Keywords = styled.div({});

const Duration = styled.div({});

const Prereqs = styled.div({});
const CharmText = styled.div({
  marginTop: 12,
  p: {
      margin: 0,
      ':not(:last-child)': {
          marginBottom: 8,
      }
  }
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
