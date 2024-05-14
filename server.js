import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    greet: String
  }
  type Query{
    user: [User]
  }
`;

const resolvers = {
  Query: {
    greet: () => "Hello world!",
  },
};


// server connection
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server
  .listen()
  .then(({ url }) => console.log("Server is running on port: ", url));
