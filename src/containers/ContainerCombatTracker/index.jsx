import { Mutation, Query } from 'react-apollo';
import { merge, uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';

import CombatTracker from '../../pages/CombatTracker';
import ContainerCombatant from '../ContainerCombatant';

export const GET_COMBAT = gql`
  query combat($id: ID!) {
    Combat(id: $id) {
      id
      turn
      name
      combatants {
        id
        init
      }
    }
  }
`;

const ADD_COMBATANT = gql`
  mutation addCombatant($combat: ID!) {
    createCombatant(combatId: $combat) {
      id
      init
    }
  }
`;

const ContainerCombatTracker = ({ match }) => {
  const combatId = match.params.combatId;
  return (
    <Query query={GET_COMBAT} variables={{ id: combatId }}>
      {({ loading, error, subscribeToMore, data }) => {
        if (loading) return 'Loading Combat...';
        if (error) return `Error! ${error.message}`;
        return (
          <Mutation
            mutation={ADD_COMBATANT}
            variables={{ combat: combatId }}
            optimisticResponse={{
              __typename: 'Mutation',
              createCombatant: {
                __typename: 'Combatant',
                combatId,
                init: 0,
                id: uniqueId(),
                optimistic: true,
              },
            }}
          >
            {addCombatant => (
              <CombatTracker
                id={data.Combat.id}
                CombatantEl={ContainerCombatant}
                turn={data.Combat.turn}
                name={data.Combat.name}
                combatants={data.Combat.combatants}
                addCombatant={id => {
                  console.debug('adding combatant to combat', id);
                  addCombatant({
                    update: (proxy, { data: { createCombatant } }) => {
                      const data = proxy.readQuery({
                        query: GET_COMBAT,
                        variables: { id },
                      });
                      proxy.writeQuery({
                        query: GET_COMBAT,
                        variables: { id },
                        data: merge({}, data, {
                          Combat: { combatants: [...data.Combat.combatants, createCombatant] },
                        }),
                      });
                    },
                  });
                }}
              />
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

ContainerCombatTracker.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      combatId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ({ ...props }) => <ContainerCombatTracker {...props} />;
