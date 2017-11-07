import { makeExecutableSchema } from 'graphql-tools';

import RootQuery from './RootQuery';
import RootMutation from './RootMutation';
import RootResolver from './RootResolver';

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation],
  resolvers: RootResolver,
});
