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
import NumberInput from '../../atoms/NumberInput';

const CombatantWrapper = styled.div(({ turnOver }) => ({
  background: turnOver ? 'grey' : 'gold',
}));

const Checkbox = styled.input({});

const Combatant = ({
  mutate,
  className,
  combatant: { name: combatantName, init, turnOver, tempPersonalMotes, tempPeripheralMotes, tempWillpower, character },
  removeCombatant,
}) => {
  const { personalMotes, peripheralMotes, willpower, name: characterName } = character || {};
  return (
    <CombatantWrapper className={className} turnOver={turnOver}>
      <Flex alignItems="center" css={{ padding: 6 }}>
        <Checkbox checked={turnOver} type="checkbox" onClick={() => mutate(!turnOver, 'turnOver')} />
        <NumberInput
          name="init"
          value={init}
          onChange={mutate}
          className={css({ ...h3CSS, marginLeft: 6, marginRight: 6 })}
        />
        <NameEditor
          name={combatantName || characterName}
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
          <Motes
            type="Personal"
            temp={tempPersonalMotes}
            permanent={personalMotes}
            onChange={mutate}
            name="tempPersonalMotes"
          />
          <Motes
            type="Peripheral"
            temp={tempPeripheralMotes}
            permanent={peripheralMotes}
            onChange={mutate}
            name="tempPeripheralMotes"
          />
          <Tooltip title="Willpower">
            <NumberInput name="tempWillpower" value={tempWillpower} onChange={mutate} />
            <span>/ {willpower}</span>
          </Tooltip>
        </section>
        <Clear css={{ cursor: 'pointer', ':hover': { fill: 'red' } }} onClick={removeCombatant} />
      </Flex>
    </CombatantWrapper>
  );
};

Combatant.fragments = {
  combatant: gql`
    fragment CombatantFields on Combatant {
      id
      name
      init
      turnOver
      tempPersonalMotes
      tempPeripheralMotes
      tempWillpower
      character {
        id
        name
        personalMotes
        peripheralMotes
        willpower
      }
    }
  `,
};

Combatant.propTypes = {
  combatant: PropTypes.shape({
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
  mutate: PropTypes.func,
  className: PropTypes.string,
  removeCombatant: PropTypes.func.isRequired,
};

export default Combatant;
