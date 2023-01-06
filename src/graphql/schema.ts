import { gql } from 'apollo-server';

export const typeDefs = () => {
    return gql`
  #union SearchResult = Book 
  type Query {
    strings: [String]
  }
`;
}
