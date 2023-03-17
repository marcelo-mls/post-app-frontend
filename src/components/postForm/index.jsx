import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { userMock } from '../../../mock';
import Container from './style';

export default function PostForm() {
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState({});
  const [newPost, setNewPost] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const fetchUser = () => {
    setUserData(userMock);
  };

  const handleAddPost = () => {
    const userPost = {
      id: 0,
      initials: 'GU',
      user: userData.name,
      post: newPost,
    };
    setPosts([userPost, ...posts]);
  };

  const handleDisableButton = () => newPost.length > 3;

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    setDisableButton(!handleDisableButton());
  }, [newPost]);

  return (
    <Container>
      <TextField
        id="filled-basic"
        label="Type here..."
        variant="filled"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={handleAddPost}
        disabled={disableButton}
      >
        Post
      </Button>
    </Container>
  );
}
