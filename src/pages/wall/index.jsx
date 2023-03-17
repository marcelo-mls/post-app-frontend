import { useEffect, useState } from 'react';

import { fetchPostsApi } from '../../services/api';
import PostForm from '../../components/postForm';
import PostCard from '../../components/postCard';
import Container from './style';

export default function Wall() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const updatedPosts = await fetchPostsApi();
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
