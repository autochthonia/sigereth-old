import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import { h3CSS } from '../../styles/type';
import Flex from '../../atoms/Flex';
import TextEditor from '../TextEditor';

const CombatantWrapper = styled.div(({turnOver}) => ({
  background: turnOver ? 'grey' : 'gold'
}));

const Checkbox = styled.input({})

const Combatant = ({ character: { name, init, turnOver } }) => (
  <CombatantWrapper turnOver={turnOver}>
    <Flex alignContent="center">
      <Checkbox checked={turnOver} type="checkbox" />
      <TextEditor plain content={String(init)} number className={css({ ...h3CSS, padding: 6, marginRight: 6 })} />
      <TextEditor plain content={name} className={css({ ...h3CSS, display: 'inline-flex', alignContent: 'center', padding: 6 })} />
    </Flex>
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
