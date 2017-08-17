import {CLIENT_ID,  USER_ID, API_URL, API_V2_URL} from '../config/index';
import fetchAPI from './index';

export const getUserAPI = () => {
  return fetchAPI(`${API_URL}/users/${USER_ID}`);
};

export const getUserRepostsAPI = ({page, limit}) => {
  return fetchAPI(`${API_V2_URL}/profile/soundcloud:users:${USER_ID}?limit=${limit}&offset=${page * limit}`)
  .then(reposts => reposts.collection);
}

export const getUserLikesAPI = ({page, limit}) => {
  return fetchAPI(`${API_V2_URL}/users/${USER_ID}/likes?limit=${limit}&offset=${page * limit}`)
  .then(likes => likes.collection);
}
