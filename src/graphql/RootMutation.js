import UserMutations from './types/User/mutations';

// NOTE: We add a placeholder so that we can extend this type on the model files
// otherwise the empty type throws an error
const RootMutation = `
type RootMutation {
  placeholder: Boolean
}
`;

export default () => [RootMutation, UserMutations];
