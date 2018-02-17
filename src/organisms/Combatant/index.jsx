import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Flex from '../../atoms/Flex';

const CombatantWrapper = styled.div({
    [Flex]: {
        background: 'gold',
    },
    background: 'gold',
});

const Combatant = ({ character: { name, init } }) => (
  <CombatantWrapper>
    {init} - {name}
  </CombatantWrapper>
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
