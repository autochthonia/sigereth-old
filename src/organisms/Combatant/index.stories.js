import React from 'react';

import { storiesOf } from '@storybook/react';

import Combatant from '.';
import { defaultCharacter } from '../../mocks/character';


storiesOf('organisms/Combatant', module).add('basic', () => <Combatant character={defaultCharacter} />);
