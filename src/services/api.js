import axios from 'axios';

export const api = {
  fetchUser(since: number) {
    return axios.get(`https://api.github.com/users?since=${since}`);
  },
  fetchUserDetail(login: string) {
    return axios.get(`https://api.github.com/users/${login}`);
  },
};
