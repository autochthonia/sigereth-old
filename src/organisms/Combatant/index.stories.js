import React from 'react';

import { storiesOf } from '@storybook/react';

import { defaultCharacter } from '../../mocks/character';
import Combatant from '.';
import Flex from '../../atoms/Flex';


storiesOf('organisms/Combatant', module).add('basic', () => <Flex width="800px" margin="0 auto"><Combatant character={defaultCharacter} /></Flex>);
