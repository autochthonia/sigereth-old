import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import React from 'react';

import Combatant from '../organisms/Combatant';

export const ADD_COMBATANT = gql`
  mutation addCombatant($combat: ID!) {
    createCombatant(combatId: $combat) {
      id
      init
    }
    updateCombat(id: $combat, dummy: "dummy") {
      id
    }
  }
`;

export const GET_COMBATANT = gql`
  query Combatant($id: ID!) {
    Combatant(id: $id) {
      ...CombatantFields
    }
  }
  ${Combatant.fragments.combatant}
`;

export const COMBATANT_SUBSCRIPTION = gql`
  subscription onCombatantUpdated($id: ID!) {
    Combatant(filter: { AND: [{ node: { id: $id } }, { mutation_in: UPDATED }] }) {
      node {
        ...CombatantFields
      }
    }
  }
  ${Combatant.fragments.combatant}
`;

export const REMOVE_COMBATANT = gql`
  mutation removeCombatant($id: ID!, $combatId: ID!) {
    deleteCombatant(id: $id) {
      id
    }
    updateCombat(id: $combatId, dummy: "dummy") {
      id
    }
  }
`;

export const MUTATE_COMBATANT = gql`
  mutation updateCombatant(
    $id: ID!
    $name: String
    $init: Int
    $turnOver: Boolean
    $tempPersonalMotes: Int
    $tempPeripheralMotes: Int
    $tempWillpower: Int
    $combatId: ID!
    $onslaught: Int
  ) {
    updateCombatant(
      id: $id
      name: $name
      init: $init
      turnOver: $turnOver
      tempPersonalMotes: $tempPersonalMotes
      tempPeripheralMotes: $tempPeripheralMotes
      tempWillpower: $tempWillpower
      onslaught: $onslaught
    ) {
      ...CombatantFields
    }
    updateCombat(id: $combatId, dummy: "dummy") {
      id
    }
  }
  ${Combatant.fragments.combatant}
`;

export const GetCombatant = ({ children, combatantId, ...props }) => (
  <Query {...props} query={GET_COMBATANT} variables={{ id: combatantId }}>
    {p => children(p)}
  </Query>
);
