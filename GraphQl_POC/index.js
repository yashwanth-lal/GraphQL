const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { ApolloServer, gql } = require("apollo-server");



const typeDefs = gql`
  type Query {
    getIncomingResponse(login: String!): IncomingResponse
  }
  type IncomingResponse {
    login: String
    html_url: String
    name: String
    company: String
    location: String
  }
`;

const resolvers = {
    Query: {
        getIncomingResponse: async (incomingResponse, id) => {
            const response = await fetch(`https://api.github.com/users/${id.login}`);
            const data = await response.json();

            return data;
        }
    }
};

const server = new ApolloServer(
    {
        typeDefs,
        resolvers

    });

    server.listen().then(({ url }) => {
        console.log("Server is ready at " + url)
    })