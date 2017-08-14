import {CLIENT_ID,  USER_ID} from '../config/index';
import fetchAPI from './index';

export const sendMusicAPI = ({idTrack}) => {
  return fetchAPI(`http://192.168.0.20:3000/music/play?client_id=${CLIENT_ID}&idTrack=${idTrack}`);
};
