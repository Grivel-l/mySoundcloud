import {CLIENT_ID,  USER_ID, SERVER_IP, API_URL} from '../config/index';
import fetchAPI from './index';

export const sendMusicAPI = ({idTrack}) => {
  return fetchAPI(`http://${SERVER_IP}/music/play?&idTrack=${idTrack}`);
};

export const searchMusicAPI = ({query}) => {
  console.log('Query', query)
  return fetchAPI(`${API_URL}/tracks?q=${query}`);
};
