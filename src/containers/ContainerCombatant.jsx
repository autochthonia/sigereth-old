import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import React from 'react';

import Combatant from '../organisms/Combatant';
import withSubscription from '../HoC/withSubscription';

const GET_CHARACTER = gql`
  query character($id: ID!) {
    Character(id: $id) {
      ...CharacterFields
    }
  }
  ${Combatant.fragments.character}
`;

const CHARACTER_SUBSCRIPTION = gql`
  subscription onCharacterUpdated($id: ID!) {
    Character(filter: { AND: [{ node: { id: $id } }, { mutation_in: UPDATED }] }) {
      node {
        ...CharacterFields
      }
    }
  }
  ${Combatant.fragments.character}
`;

const SubscribedCombatant = withSubscription(Combatant);

const ContainerCombatant = ({ id, ...props }) => (
  <Query query={GET_CHARACTER} variables={{ id }}>
    {({ loading, error, subscribeToMore, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <SubscribedCombatant
          {...props}
          character={data.Character}
          subscribe={() =>
            subscribeToMore({
              document: CHARACTER_SUBSCRIPTION,
              variables: { id },
            })
          }
        />
      );
    }}
  </Query>
);

ContainerCombatant.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContainerCombatant;
