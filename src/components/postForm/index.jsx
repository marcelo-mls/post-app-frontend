import { useEffect, useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { Container, InputContainer } from './style';
import { insertPost } from '../../services/api.posts';
import AppContext from '../../context/AppContext';

export default function PostForm() {
  const [newPost, setNewPost] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const {
    postsGlobal,
    setPostsGlobal,
  } = useContext(AppContext);

  const handleAddPost = async () => {
    const userPost = {
      user: '6417407095c2f13e4c8a7d9a',
      post: newPost,
    };

    const response = await insertPost(userPost);

    if (response === 201) {
      setPostsGlobal([userPost, ...postsGlobal]);
      setNewPost('');
    }
  };

  const handleDisableButton = () => newPost.length > 3;

  useEffect(() => {

  }, []);

  useEffect(() => {
    setDisableButton(!handleDisableButton());
  }, [newPost]);

  return (
    <Container>
      <InputContainer>
        <TextField
          id="filled-basic"
          label="Type here..."
          variant="filled"
          multiline
          rows={2}
          fullWidth
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
      </InputContainer>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={handleAddPost}
        disabled={disableButton}
      >
        Post on the wall
      </Button>
    </Container>
  );
}
