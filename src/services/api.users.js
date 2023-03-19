import API from './axios';

export const getUser = async (payload) => {
  try {
    const response = await API.post('auth/user', payload);

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error.name}: ${error.message}`);

    return error.message;
  }
};

export const insertUser = async (payload) => {
  try {
    const response = await API.post('user', payload);
    return response.status;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(`${error.name}: ${error.message}`);
  }
};
