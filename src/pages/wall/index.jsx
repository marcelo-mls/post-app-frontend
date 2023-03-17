import { useEffect, useState } from 'react';

import PostForm from '../../components/postForm';
import PostCard from '../../components/postCard';
import { postsMock } from '../../../mock';
import Container from './style';

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
    <Container>
      <PostForm />
      {posts.map((post) => (
        <PostCard
          key={post.id}
          initials={post.initials}
          user={post.user}
          post={post.post}
        />
      ))}
    </Container>
  );
}
