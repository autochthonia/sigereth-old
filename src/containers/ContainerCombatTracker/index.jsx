import { Mutation } from 'react-apollo';
import { merge, uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { ADD_COMBATANT } from '../../gql/Combatant';
import { GET_COMBAT, GetCombat } from '../../gql/Combat';
import { GetAllCharacters } from '../../gql/Character';
import CombatTracker from '../../pages/CombatTracker';
import ContainerCombatant from '../ContainerCombatant';

const ContainerCombatTracker = ({ match }) => {
  const combatId = match.params.combatId;
  return (
    <GetCombat combatId={combatId}>
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
              <GetAllCharacters>
                {({
                  loading: getAllCharactersLoading,
                  error: getAllCharactersError,
                  subscribeToMore: getAllCharactersSubscribeToMore,
                  data: getAllCharactersData,
                }) => (
                  <CombatTracker
                    id={data.Combat.id}
                    CombatantEl={ContainerCombatant}
                    turn={data.Combat.turn}
                    name={data.Combat.name}
                    combatants={data.Combat.combatants}
                    availableCharacters={getAllCharactersLoading ? null : getAllCharactersData.allCharacters}
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
              </GetAllCharacters>
            )}
          </Mutation>
        );
      }}
    </GetCombat>
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
