import { Mutation, Query } from 'react-apollo';
import { merge } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import gql from 'graphql-tag';

import CombatTracker from '../../pages/CombatTracker';
import ContainerCombatant from '../ContainerCombatant';

const GET_COMBAT = gql`
  query combat {
    Combat(id: "cjfynjkl828s701300way4455") {
      id
      turn
      name
      combatants {
        id
      }
    }
  }
`;

const MUTATE_CHARACTER = gql`
  mutation updateCharacter(
    $id: ID!
    $name: String
    $init: Int
    $turnOver: Boolean
    $tempPersonalMotes: Int
    $tempPeripheralMotes: Int
    $tempWillpower: Int
  ) {
    updateCharacter(
      id: $id
      name: $name
      init: $init
      turnOver: $turnOver
      tempPersonalMotes: $tempPersonalMotes
      tempPeripheralMotes: $tempPeripheralMotes
      tempWillpower: $tempWillpower
    ) {
      id
      name
      init
      turnOver
      tempPersonalMotes
      tempPeripheralMotes
      tempWillpower
    }
  }
`;

class ContainerCombatTracker extends Component {
  _updateCharacter = (id, field, value) => {
    console.debug('updating character', id, field, value);
    this.props.updateCharacter({
      variables: { id, [field]: value },
      optimisticResponse: {
        __typename: 'Mutation',
        updateCharacter: {
          __typename: 'Character',
          id,
          [field]: value,
        },
      },
      update: (proxy, { data: { updateCharacter } }) => {
        const data = proxy.readQuery({
          query: GET_COMBAT,
          variables: { id: this.props.match.params.combatId },
        });
        const newData = merge(data, {
          Combat: { combatants: data.Combat.combatants.map(c => (c.id === id ? c : c)) },
        });
        console.debug('saving data to apollo: ', newData);
        proxy.writeQuery({
          query: GET_COMBAT,
          variables: { id: this.props.match.params.combatId },
          data: newData,
        });
      },
    });
  };

  render() {
    console.log(this.props.match);

    return (
      <Query query={GET_COMBAT} variables={{ id: this.props.match.params.combatId }}>
        {({ loading, error, subscribeToMore, data }) => {
          console.log(error);
          
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <CombatTracker
              CombatantEl={ContainerCombatant}
              turn={data.Combat.turn}
              name={data.Combat.name}
              combatants={data.Combat.combatants}
              mutateCombatant={this._updateCharacter}
            />
          );
        }}
      </Query>
    );
  }
}

ContainerCombatTracker.propTypes = {
  updateCharacter: PropTypes.func.isRequired,
};

export default ({ ...props }) => (
  <Mutation mutation={MUTATE_CHARACTER}>
    {updateCharacter => <ContainerCombatTracker updateCharacter={updateCharacter} {...props} />}
  </Mutation>
);
