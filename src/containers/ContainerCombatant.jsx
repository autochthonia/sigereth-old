import { Mutation } from 'react-apollo';
import { get, merge, reject, uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import {
  COMBATANT_SUBSCRIPTION,
  GET_COMBATANT,
  GetCombatant,
  MUTATE_COMBATANT,
  REMOVE_COMBATANT,
} from '../gql/Combatant';
import { GET_COMBAT } from '../gql/Combat';
import { MutationLinkCharacter } from '../gql/Character';
import Combatant from '../organisms/Combatant';
import withSubscription from '../HoC/withSubscription';

export const SubscribedCombatant = withSubscription(Combatant);

const ContainerCombatant = ({ id: combatantId, combatId, ...props }) => (
  <Mutation
    mutation={REMOVE_COMBATANT}
    variables={{ id: combatantId, combatId }}
    // TODO: REMOVE_COMBATANT optimistic response
    // optimisticResponse={{
    //   // Some sort of temporary state that lets user know operation is in progress
    // }}
    update={proxy => {
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
          <MutationLinkCharacter>
            {linkCharacter => (
              <GetCombatant combatantId={combatantId}>
                {({ loading, error, subscribeToMore, data }) => {
                  if (loading) return 'Loading...';
                  if (error) return `Error! ${error.message}`;

                  const id = get(data, 'Combatant.id', combatantId);
                  return (
                    <SubscribedCombatant
                      {...props}
                      linkToCharacter={linkCharacter}
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
                          variables: { id, combatId, [field]: value },
                          optimisticResponse: {
                            __typename: 'Mutation',
                            updateCombatant: {
                              __typename: 'Combatant',
                              id,
                              ...data.Combatant,
                              [field]: value,
                            },
                          },
                          update: (proxy, { data: { updateCombatant: updateCombatantResponse } }) => {
                            const { Combatant: CombatantQuery } = proxy.readQuery({
                              query: GET_COMBATANT,
                              variables: { id },
                            });
                            proxy.writeQuery({
                              query: GET_COMBATANT,
                              variables: { id },
                              data: { Combatant: merge(CombatantQuery, updateCombatantResponse) },
                            });
                          },
                        });
                      }}
                      removeCombatant={removeCombatant}
                    />
                  );
                }}
              </GetCombatant>
            )}
          </MutationLinkCharacter>
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
