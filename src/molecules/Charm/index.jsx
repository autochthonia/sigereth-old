import PropTypes from 'prop-types';
import React from 'react';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'react-emotion';

import colors from '../../styles/colors';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

const CharmWrapper = styled.div({});
const Name = styled.h1({
  color: colors.blue,
  marginBottom: 8,
  fontVariant: 'small-caps',
  fontSize: 24,
});
const Cost = styled.span({});
const Mins = styled.span({});
const Type = styled.div({});

const Keywords = styled.div({});

const Duration = styled.div({});

const Prereqs = styled.div({});
const CharmText = styled.div({
  marginTop: 12,
});

const Combatant = ({ name, cost, mins, type, keywords, duration, prereqs, text }) => (
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

// Or does it get these through context?
Combatant.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    init: PropTypes.number,
  }).isRequired,
  // mutate takes a path and a value e.g. `mutate('name', 'Peleps Deled')` and sends
  // How do we bundle in character id?
  mutate: PropTypes.func,
};

export default Combatant;
