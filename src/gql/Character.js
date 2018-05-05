import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import React from 'react';

import { GET_COMBATANT } from './Combatant';

export const GET_CHARACTER = gql`
  query Character($id: ID!) {
    Character(id: $id) {
      id
      name
    }
  }
`;

export const GET_ALL_CHARACTERS = gql`
  query allCharacters {
    allCharacters {
      id
      name
    }
  }
`;

export const GetAllCharacters = ({ children, ...props }) => (
  <Query {...props} query={GET_ALL_CHARACTERS}>
    {p => children(p)}
  </Query>
);

export const LINK_COMBATANT_TO_CHARACTER = gql`
  mutation linkCharacterToCombatant($combatantId: ID!, $characterId: ID!) {
    addToCombatantOnCharacter(combatantInstancesCombatantId: $combatantId, characterCharacterId: $characterId) {
      characterCharacter {
        id
        name
      }
      combatantInstancesCombatant {
        id
      }
    }
  }
`;

export const MutationLinkCharacter = ({ children, ...props }) => (
  <Mutation
    mutation={LINK_COMBATANT_TO_CHARACTER}
    update={(proxy, response) => {
      console.log(response);

      const {
        data: {
          addToCombatantOnCharacter: {
            characterCharacter: character,
            combatantInstancesCombatant: { id: combatantId },
          },
        },
      } = response;

      const { Combatant } = proxy.readQuery({
        query: GET_COMBATANT,
        variables: { id: combatantId },
      });
      proxy.writeQuery({
        query: GET_COMBATANT,
        variables: { id: combatantId },
        data: { Combatant: { ...Combatant, character } },
      });
    }}
    {...props}
  >
    {p => children(p)}
  </Mutation>
);
