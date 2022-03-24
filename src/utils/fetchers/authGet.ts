import axios from 'axios';
import { getParams, Response, User } from 'types/utils/authGet.template';

export const authGet: getParams = async (url, withCredentials) => {
  try {
    return axios
      .get<Response>(`http://localhost:6969/${url}`, { withCredentials })
      .then((res) => {
        return res.data.user as User;
      });
  } catch (err) {
    console.error(err);
    return err;
  }
};
