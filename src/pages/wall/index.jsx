import { useEffect, useState, useContext } from 'react';

import Header from '../../components/header';
import PostForm from '../../components/postForm';
import PostCard from '../../components/postCard';
import { getPosts } from '../../services/api.posts';
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

    const response = await getPosts();

    setPostsGlobal(response);
    setPostsToRender(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [postsGlobal]);

  return (
    <>
      <Header />
      <Container>
        <PostForm />
        {
        isLoading
          ? <p>loading...</p>
          : postsToRender.map((post) => (
            <PostCard
              // eslint-disable-next-line no-underscore-dangle
              key={post._id}
              initials={post.user.initials}
              user={post.user.name}
              post={post.post}
              // eslint-disable-next-line no-underscore-dangle
              id={post._id}
            />
          ))
      }
      </Container>
    </>
  );
}
