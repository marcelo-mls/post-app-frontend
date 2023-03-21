import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header';
import PostForm from '../../components/postForm';
import PostCard from '../../components/postCard';
import { getPosts } from '../../services/api.posts';
import Container from './style';

export default function Wall() {
  const [postsToRender, setPostsToRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));

  const fetchApi = async () => {
    setIsLoading(true);
    const response = await getPosts();
    setPostsToRender(response.data);
    setIsLoading(false);
  };

  const handleLogout = async () => {
    localStorage.removeItem('userData');
    setUserData(JSON.parse(localStorage.getItem('userData')));
    await fetchApi();
    navigate('/wall');
  };

  useEffect(() => {
    fetchApi();
    setUserData(JSON.parse(localStorage.getItem('userData')));
  }, []);

  return (
    <>
      <Header userData={userData} onLogout={handleLogout} />
      <Container>
        {
          userData && <PostForm userData={userData} />
        }
        {
          isLoading
            ? <p>loading...</p>
            : postsToRender.map((post) => (
              <PostCard
                key={post._id}
                initials={post.user.initials}
                user={post.user.name}
                post={post.post}
                id={post._id}
                userId={post.user._id}
                userData={userData}
              />
            ))
      }
      </Container>
    </>
  );
}
