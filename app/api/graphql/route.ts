import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { resolvers } from "./../../../graphql/resolvers";
import { typeDefs } from "./../../../graphql/schemas";
import connectToMongodb from "@/utils/mongodb";
// import { gql } from "graphql-tag";

// const typeDefs = gql`
//   input UserInput {
//     name: String
//     age: Number
//   }

//   type Query {
//     hello: String
//     hiclass: String
//   }

//   type Mutation {
//     hi(user: UserInput): String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hello world!",
//   },
//   Mutation: {
//     hi: (user: { name: string; age: number }) => {
//       console.log(user);
//     },
//   },
// };

connectToMongodb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
