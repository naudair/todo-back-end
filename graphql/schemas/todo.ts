import gql from "graphql-tag";

export const ListTypes = gql`
  type ListTypes {
    _id: ID!
    title: String
    status: String
  }
  input ListTypesInput {
    title: String
    status: String
  }
  type Query {
    getTodos: [ListTypes]
  }
  type Mutation {
    createTodo(item: ListTypesInput): ListTypes
    editTodo(id: ID!, item: ListTypesInput): ListTypes
    deleteTodo(id: ID!): ListTypes
  }
`;
