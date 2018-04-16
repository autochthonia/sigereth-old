import { Tooltip } from 'react-tippy';
import { css } from 'emotion';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import { h3CSS } from '../../styles/type';
import Clear from '../../icons/Clear';
import Flex from '../../atoms/Flex';
import InitEditor from './InitEditor';
import Motes from './Motes';
import NameEditor from './NameEditor';

const CombatantWrapper = styled.div(({ turnOver }) => ({
  background: turnOver ? 'grey' : 'gold',
}));

const Checkbox = styled.input({});

const Combatant = ({
  mutate,
  className,
  character: {
    name,
    init,
    turnOver,
    personalMotes,
    tempPersonalMotes,
    peripheralMotes,
    tempPeripheralMotes,
    willpower,
    tempWillpower,
  },
}) => (
  <CombatantWrapper className={className} turnOver={turnOver}>
    <Flex alignItems="center" css={{ padding: 6 }}>
      <Checkbox checked={turnOver} type="checkbox" onClick={() => mutate(!turnOver, 'turnOver')} />
      <InitEditor
        number
        init={init}
        className={css({ ...h3CSS, marginLeft: 6, marginRight: 6 })}
        onChange={mutate}
        name="init"
      />
      <NameEditor
        name={name}
        className={css({ ...h3CSS, display: 'inline-flex', alignContent: 'center' })}
        onChange={mutate}
      />
      <section
        css={{
          paddingLeft: 12,
          paddingRight: 12,
          display: 'inline-flex',
          justifyContent: 'space-around',
          flex: '1 1 auto',
        }}
      >
        <Motes type="Personal" temp={tempPersonalMotes} permanent={personalMotes} />
        <Motes type="Peripheral" temp={tempPeripheralMotes} permanent={peripheralMotes} />
        <Tooltip title="Willpower">
          <span>{tempWillpower}</span>
        </Tooltip>
      </section>
      <Clear css={{ cursor: 'pointer', ':hover': { fill: 'red' } }} />
    </Flex>
  </CombatantWrapper>
);

Combatant.fragments = {
  character: gql`
  fragment CharacterFields on Character {
    id
    name
    init
    turnOver
    tempPersonalMotes
    personalMotes
    tempPeripheralMotes
    peripheralMotes
    tempWillpower
    willpower
  }
`,
};

Combatant.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    init: PropTypes.number,
    turnOver: PropTypes.bool.isRequired,
    tempPersonalMotes: PropTypes.number,
    tempPeripheralMotes: PropTypes.number,
    tempWillpower: PropTypes.number,
    personalMotes: PropTypes.number,
    peripheralMotes: PropTypes.number,
    willpower: PropTypes.number,
  }).isRequired,
  // mutate takes a path and a value e.g. `mutate('name', 'Peleps Deled')` and sends
  // How do we bundle in character id?
  mutate: PropTypes.func,
  className: PropTypes.string,
};

export default Combatant;
