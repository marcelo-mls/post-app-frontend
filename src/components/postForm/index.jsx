import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

import { Container, InputContainer } from './style';
import { insertPost } from '../../services/api.posts';

export default function PostForm(props) {
  const [newPost, setNewPost] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const { userData } = props;

  const handleDisableButton = () => newPost.length > 3;

  const handleAddPost = async () => {
    const userPost = { user: userData._id, post: newPost };
    const { status } = await insertPost(userPost);
    if (status === 201) { setNewPost(''); }
  };

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

PostForm.propTypes = {
  userData: PropTypes.object,
}.isRequired;
