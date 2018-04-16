import React from 'react';

import { storiesOf, action } from '@storybook/react';

import { defaultCharacter } from '../../mocks/character';
import CombatTracker from '.';

storiesOf('pages/CombatTracker', module).add('default', () => (
  <CombatTracker
    name="foo"
    turn="0"
    combatants={[{ ...defaultCharacter, turnOver: false }, { ...defaultCharacter, turnOver: true }]}
    mutateCombatant={action('mutateCombatant')}
  />
));
