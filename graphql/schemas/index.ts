// import { UserTypes } from "./user";
import { ListTypes } from "./todo";
import { mergeTypeDefs } from "@graphql-tools/merge";

export const typeDefs = mergeTypeDefs([ListTypes]);

// http://localhost:3000/api/graphql