import { useEffect, useState } from 'react';

import postsMock from '../../../mock';

export default function Wall() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    const updatedPosts = postsMock.map((post) => ({
      ...post,
      initials: (`${post.user[0]}${post.user[post.user.length - 1]}`).toUpperCase(),
    }));
    setPosts(updatedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (

        <div key={post.id}>
          <div>{post.initials}</div>
          <p>{post.user}</p>
          <p>{post.post}</p>
        </div>
      ))}
    </>
  );
}
