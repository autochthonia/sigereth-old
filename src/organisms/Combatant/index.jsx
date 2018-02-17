import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../atoms/Flex';

const Combatant = ({ character: { name, init } }) => <Flex>{init} - {name}</Flex>;

Combatant.propTypes = {
  character: PropTypes.shape({
      name: PropTypes.string,
      init: PropTypes.number,
  }),
};

export default Combatant;
