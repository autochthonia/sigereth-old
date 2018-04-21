import { Query } from 'react-apollo';
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

const ContainerCombatTracker = ({ match }) => (
  <Query query={GET_COMBAT} variables={{ id: match.params.combatId }}>
    {({ loading, error, subscribeToMore, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <CombatTracker
          CombatantEl={ContainerCombatant}
          turn={data.Combat.turn}
          name={data.Combat.name}
          combatants={data.Combat.combatants}
        />
      );
    }}
  </Query>
);

export default ({ ...props }) => <ContainerCombatTracker {...props} />;
