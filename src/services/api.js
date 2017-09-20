import axios from 'axios';

export const api = {
  fetchUsers(since: number) {
    return axios.get(`https://api.github.com/users?since=${since}`);
  },
};
