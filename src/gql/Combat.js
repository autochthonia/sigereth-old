import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import React from 'react';

import Combatant from '../organisms/Combatant';

export const CombatFragments = gql`
  fragment CombatFields on Combat {
    id
    turn
    name
    combatants {
      id
      init
    }
  }
`;

export const GET_COMBAT = gql`
  query combat($id: ID!) {
    Combat(id: $id) {
      ...CombatFields
    }
  }
  ${CombatFragments}
`;

export const COMBAT_SUBSCRIPTION = gql`
  subscription($id: ID!) {
    Combat(filter: { AND: [{ node: { id: $id } }, { mutation_in: UPDATED }] }) {
      node {
        ...CombatFields
      }
    }
  }
  ${CombatFragments}
`;

export const GetCombat = ({ children, combatId, ...props }) => (
  <Query {...props} query={GET_COMBAT} variables={{ id: combatId }}>
    {p => children(p)}
  </Query>
);
