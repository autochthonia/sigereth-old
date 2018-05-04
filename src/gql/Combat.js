import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import React from 'react';

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

export const GetCombat = ({ children, combatId, ...props }) => (
  <Query {...props} query={GET_COMBAT} variables={{ id: combatId }}>
    {p => children(p)}
  </Query>
);
