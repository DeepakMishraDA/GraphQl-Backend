//import { ApolloServer } from '@apollo/server';
import { gql,ApolloServer} from 'apollo-server';

const nums = [{"ff":2}
    // {
    //   title: 'The Awakening',
    //   author: 'Kate Chopin',
    // },
    // {
    //   title: 'City of Glass',
    //   author: 'Paul Auster',
    // },
  ];

const typeDefs = gql`#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
   #type Nums: Int
   # {
#     title: String
#     author: String
#   }
type Book {
    ff: Int
}
union SearchResult = Book 
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    nums: [Book]
    #[Book]
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      nums: () => nums,
    },
  };

  const server =  new ApolloServer({typeDefs, resolvers});

server.listen().then( ({url}) => {
    console.log(`${url}`);
})