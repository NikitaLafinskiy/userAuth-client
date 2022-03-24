import axios from 'axios';
import { postParams } from 'types/utils/post.template';

export const post = async ({ url, data, withCredentials }: postParams) => {
  try {
    const finalURL = `http://localhost:6969/${url}`;
    const res = await axios({
      method: 'POST',
      data,
      url: finalURL,
      withCredentials,
    });

    return res;
  } catch (err) {
    console.error(err);
    return err;
  }
};
