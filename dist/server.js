"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./graphql/schema");
const resolvers_1 = require("./graphql/resolvers");
const resolvers = (0, resolvers_1.resolver)();
//remember both r keywords {typeDefs, resolvers}
const server = new apollo_server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`${url}`);
});
