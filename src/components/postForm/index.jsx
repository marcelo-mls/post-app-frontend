import { useEffect, useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { Container, InputContainer } from './style';
import { fetchUserApi } from '../../services/api';
import AppContext from '../../context/AppContext';

export default function PostForm() {
  const [userData, setUserData] = useState({});
  const [newPost, setNewPost] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const {
    setUserDataGlobal,
    postsGlobal,
    setPostsGlobal,
  } = useContext(AppContext);

  const fetchApi = async () => {
    const userResponse = await fetchUserApi();
    setUserData(userResponse.data);
    setUserDataGlobal(userResponse.data);
  };

  const handleAddPost = () => {
    const arrName = userData.name.split(' ');
    const userPost = {
      id: 0,
      initials: (`${userData.name[0]}${arrName.at(-1)[0]}`).toUpperCase(),
      user: userData.name,
      post: newPost,
    };
    setPostsGlobal([userPost, ...postsGlobal]);
  };

  const handleDisableButton = () => newPost.length > 3;

  useEffect(() => {
    fetchApi();
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
