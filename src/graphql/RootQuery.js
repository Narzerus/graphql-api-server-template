import UserQueries from './types/User/queries';

const RootQuery = `
type RootQuery {
  user(_id: ID!): User
}
`;

export default () => [RootQuery, UserQueries];
