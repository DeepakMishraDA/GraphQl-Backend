import { ApolloServer} from 'apollo-server';

import { typeDefs } from "./graphql/schema";
import { resolver } from "./graphql/resolvers";
//import { resolve } from 'path';

const resolvers = resolver();

//remember both r keywords {typeDefs, resolvers}
const server =  new ApolloServer({typeDefs, resolvers});

server.listen().then( ({url}) => {
    console.log(`${url}`);
})