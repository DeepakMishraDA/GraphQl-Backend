"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const typeDefs = () => {
    return (0, apollo_server_1.gql) `
  #union SearchResult = Book 
  type Query {
    strings: [String]
  }
`;
};
exports.typeDefs = typeDefs;
