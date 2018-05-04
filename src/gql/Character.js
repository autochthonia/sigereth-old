import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import React from 'react';

export const GET_CHARACTER = gql`
  query Character($id: ID!) {
    Character(id: $id) {
      id
      name
    }
  }
`;

export const GET_ALL_CHARACTERS = gql`
  query allCharacters {
    allCharacters {
      id
      name
    }
  }
`;

export const GetAllCharacters = ({ children, ...props }) => (
  <Query {...props} query={GET_ALL_CHARACTERS}>
    {p => children(p)}
  </Query>
);
