import {CLIENT_ID,  USER_ID, API_URL, API_V2_URL} from '../config/index';
import fetchAPI from './index';

export const getUserAPI = () => {
  return fetchAPI(`${API_URL}/users/${USER_ID}`);
};

export const getUserRepostsAPI = ({offset, limit}) => {
  return fetchAPI(`${API_V2_URL}/stream/users/${USER_ID}?limit=${limit}&offset=${offset}`)
  .then(reposts => reposts.collection);
}

export const getUserLikesAPI = ({offset, limit}) => {
  return fetchAPI(`${API_V2_URL}/users/${USER_ID}/likes?limit=${limit}&offset=${offset}`);
}
