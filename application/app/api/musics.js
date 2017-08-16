import {CLIENT_ID,  USER_ID, SERVER_IP} from '../config/index';
import fetchAPI from './index';

export const sendMusicAPI = ({idTrack}) => {
  return fetchAPI(`http://${SERVER_IP}/music/play?client_id=${CLIENT_ID}&idTrack=${idTrack}`);
};
