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

export async function fetchUserApi() {
  const request = await fetch('https://rickandmortyapi.com/api/character');
  const response = await request.json();

  const result = {
    data: {
      id: response.results[0].id,
      name: response.results[0].name,
      email: `${response.results[0].name.replace(' ', '-')}@${response.results[0].species}.com`.toLowerCase(),
    },
    token: response.results[0].origin.name,
  };

  return result;
}
