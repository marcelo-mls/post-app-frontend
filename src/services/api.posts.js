import API from './axios';

export const getPosts = async () => {
  try {
    const response = await API.get('posts');

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error.name}: ${error.message}`);

    return [];
  }
};

export const insertPost = async (payload) => {
  try {
    const response = await API.post('posts', payload);
    return response.status;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(`${error.name}: ${error.message}`);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await API.delete(`posts/${id}`);

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(`${error.name}: ${error.message}`);
  }
};
