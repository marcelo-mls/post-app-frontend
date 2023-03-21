import API from './axios';
import friendlyError from './friendlyError';

export const getUser = async (payload) => {
  try {
    const response = await API.post('auth/user', payload);

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error.name}: ${error.message}`, friendlyError(error));
    return error.message;
    // return friendlyError(error);
  }
};

export const insertUser = async (payload) => {
  try {
    const response = await API.post('user', payload);

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error.name}: ${error.message}`);
    return error.message;
  }
};
