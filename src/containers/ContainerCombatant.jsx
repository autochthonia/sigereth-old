import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { merge, reject } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { GET_COMBAT } from './ContainerCombatTracker';
import Combatant from '../organisms/Combatant';
import withSubscription from '../HoC/withSubscription';

const GET_COMBATANT = gql`
  query Combatant($id: ID!) {
    Combatant(id: $id) {
      ...CombatantFields
    }
  }
  ${Combatant.fragments.combatant}
`;

const COMBATANT_SUBSCRIPTION = gql`
  subscription onCombatantUpdated($id: ID!) {
    Combatant(filter: { AND: [{ node: { id: $id } }, { mutation_in: UPDATED }] }) {
      node {
        ...CombatantFields
      }
    }
  }
  ${Combatant.fragments.combatant}
`;

const REMOVE_COMBATANT = gql`
  mutation removeCombatant($id: ID!) {
    deleteCombatant(id: $id) {
      id
    }
  }
`;

const MUTATE_COMBATANT = gql`
  mutation updateCombatant(
    $id: ID!
    $name: String
    $init: Int
    $turnOver: Boolean
    $tempPersonalMotes: Int
    $tempPeripheralMotes: Int
    $tempWillpower: Int
  ) {
    updateCombatant(
      id: $id
      name: $name
      init: $init
      turnOver: $turnOver
      tempPersonalMotes: $tempPersonalMotes
      tempPeripheralMotes: $tempPeripheralMotes
      tempWillpower: $tempWillpower
    ) {
      ...CombatantFields
    }
  }
  ${Combatant.fragments.combatant}
`;

export const SubscribedCombatant = withSubscription(Combatant);

const ContainerCombatant = ({ id: combatantId, combatId, ...props }) => (
  <Mutation
    mutation={REMOVE_COMBATANT}
    variables={{ id: combatantId }}
    // TODO: REMOVE_COMBATANT optimistic response
    // optimisticResponse={{
    //   // Some sort of temporary state that lets user know operation is in progress
    // }}
    update={(
      proxy,
      {
        data: {
          deleteCombatant: { id: combatantId },
        },
      },
    ) => {
      console.debug(`REMOVE_COMBAT - combatId: ${combatId}, combatantId: ${combatantId}`);
      const { Combat } = proxy.readQuery({
        query: GET_COMBAT,
        variables: { id: combatId },
      });
      proxy.writeQuery({
        query: GET_COMBAT,
        variables: { id: combatId },
        data: { Combat: { ...Combat, combatants: reject(Combat.combatants, { id: combatantId }) } },
      });
    }}
  >
    {removeCombatant => (
      <Mutation mutation={MUTATE_COMBATANT}>
        {updateCombatant => (
          <Query query={GET_COMBATANT} variables={{ id: combatantId }}>
            {({ loading, error, subscribeToMore, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;

              const id = data.Combatant.id;
              return (
                <SubscribedCombatant
                  {...props}
                  combatant={data.Combatant}
                  subscribe={() =>
                    subscribeToMore({
                      document: COMBATANT_SUBSCRIPTION,
                      variables: { id },
                    })
                  }
                  mutate={(value, field) => {
                    console.debug('updating combatant', id, field, value);
                    updateCombatant({
                      variables: { id, [field]: value },
                      optimisticResponse: {
                        __typename: 'Mutation',
                        updateCombatant: {
                          __typename: 'Combatant',
                          id,
                          ...data.Combatant,
                          [field]: value,
                        },
                      },
                      update: (proxy, { data: { updateCombatant } }) => {
                        const { Combatant } = proxy.readQuery({
                          query: GET_COMBATANT,
                          variables: { id },
                        });
                        proxy.writeQuery({
                          query: GET_COMBATANT,
                          variables: { id },
                          data: { Combatant: merge(Combatant, updateCombatant) },
                        });
                      },
                    });
                  }}
                  removeCombatant={removeCombatant}
                />
              );
            }}
          </Query>
        )}
      </Mutation>
    )}
  </Mutation>
);

ContainerCombatant.propTypes = {
  id: PropTypes.string.isRequired,
  combatId: PropTypes.string.isRequired,
};

export default ContainerCombatant;
