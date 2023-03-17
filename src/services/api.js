export async function fetchPostsApi() {
  const request = await fetch('https://rickandmortyapi.com/api/character');
  const response = await request.json();

  const result = response.results.map((e) => {
    const arrName = e.name.split(' ');
    return {
      id: e.id,
      user: e.name,
      initials: (`${e.name[0]}${arrName.at(-1)[0]}`).toUpperCase(),
      post: [e.status, e.species, e.gender, e.origin.name, e.location.name, e.created].join(', '),
    };
  });

  return result;
}

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
