import { createTransform } from 'redux-persist';

const followedUsersTransform = createTransform(
  (state, key) => ({
    followedUsers: Array.from(state.followedUsers),
  }),
  (raw, key) => ({
    followedUsers: new Set(raw.followedUsers),
  }),
  {
    whitelist: ['github'],
  },
);

export default [followedUsersTransform];
