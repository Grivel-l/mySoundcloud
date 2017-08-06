import {CLIENT_ID,  USER_ID} from '../config/index';
import fetchAPI from './index';

export const getUserAPI = () => {
  return fetchAPI(`http://api.soundcloud.com/users/${USER_ID}?client_id=${CLIENT_ID}`);
};

export const getUserRepostsAPI = ({page, limit}) => {
  return fetchAPI(`https://api-v2.soundcloud.com/profile/soundcloud:users:${USER_ID}?limit=${limit}&offset=${page * limit}&client_id=${CLIENT_ID}`)
  .then(reposts => reposts.collection);
}

export const getUserLikesAPI = ({page, limit}) => {
  return fetchAPI(`https://api-v2.soundcloud.com/users/${USER_ID}/likes?limit=${limit}&offset=${page * limit}&client_id=${CLIENT_ID}`)
  .then(reposts => reposts.collection);
}
