import { useEffect, useState, useContext } from 'react';

import PostForm from '../../components/postForm';
import PostCard from '../../components/postCard';
import { fetchPostsApi } from '../../services/api';
import Container from './style';
import AppContext from '../../context/AppContext';

export default function Wall() {
  const [postsToRender, setPostsToRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    postsGlobal,
    setPostsGlobal,
  } = useContext(AppContext);

  const fetchApi = async () => {
    setIsLoading(true);
    const response = await fetchPostsApi();

    setPostsGlobal(response);
    setPostsToRender(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [postsGlobal]);

  return (
    <Container>
      <PostForm />
      {
        isLoading
          ? <p>loading...</p>
          : postsToRender.map((post) => (
            <PostCard
              key={post.id}
              initials={post.initials}
              user={post.user}
              post={post.post}
            />
          ))
      }
    </Container>
  );
}
