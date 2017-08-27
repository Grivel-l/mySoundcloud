import {CLIENT_ID,  USER_ID, SERVER_IP, API_URL} from '../config/index';
import fetchAPI from './index';

export const sendMusicAPI = ({idTrack}) => {
  return fetchAPI(`${SERVER_IP}/music/play?&idTrack=${idTrack}`);
};

export const searchMusicAPI = ({query}) => {
  return fetchAPI(`${API_URL}/tracks?q=${query}`);
};

export const actionButtonAPI = () => {
  return fetchAPI(`${SERVER_IP}/music/action`);
};
