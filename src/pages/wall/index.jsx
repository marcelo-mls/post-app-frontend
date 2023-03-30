import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header';
import PostForm from '../../components/postForm';
import PostCard from '../../components/postCard';
import { getPosts, insertPost, deletePost } from '../../services/api.posts';
import Container from './style';

export default function Wall() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [postsToRender, setPostsToRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const fetchApi = async () => {
    const response = await getPosts();
    setPostsToRender(response.data);
  };

  const handleLogout = async () => {
    localStorage.removeItem('userData');
    setUserData(JSON.parse(localStorage.getItem('userData')));
    await fetchApi();
    navigate('/wall');
  };

  const handleAddPost = async (newPost, setNewPost) => {
    const userPost = { user: userData.id, post: newPost };
    const { status } = await insertPost(userPost);
    if (status === 201) {
      await fetchApi();
      setNewPost('');
    }
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    await fetchApi();
  };

  useEffect(() => {
    setIsLoading(true);
    fetchApi();
    setUserData(JSON.parse(localStorage.getItem('userData')));
    setIsLoading(false);
  }, []);

  return (
    <>
      <Header userData={userData} onLogout={handleLogout} />
      <Container>
        {
          userData && <PostForm onAddPost={handleAddPost} />
        }
        {
          isLoading
            ? <p>loading...</p>
            : postsToRender.map((post) => (
              <PostCard
                key={post.id}
                initials={post.user.initials}
                user={post.user.name}
                post={post.post}
                id={post.id}
                userId={post.user.id}
                userData={userData}
                onDelete={handleDelete}
              />
            ))
      }
      </Container>
    </>
  );
}
