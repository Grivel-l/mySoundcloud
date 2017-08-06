import {CLIENT_ID,  USER_ID} from '../config/index';
import fetchAPI from './index';

export const getUserAPI = () => {
  return fetchAPI(`http://api.soundcloud.com/users/${USER_ID}?client_id=${CLIENT_ID}`);
};
