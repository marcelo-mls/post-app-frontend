import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import postsMock from '../../../mock';

export default function Wall() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const fetchPosts = () => {
    const updatedPosts = postsMock.map((post) => ({
      ...post,
      initials: (`${post.user[0]}${post.user[post.user.length - 1]}`).toUpperCase(),
    }));
    setPosts(updatedPosts);
  };

  const handleAddPost = () => {
    const userPost = {
      id: 0,
      initials: 'GU',
      user: 'Guest User',
      post: newPost,
    };
    setPosts([userPost, ...posts]);
  };

  const handleDisableButton = () => newPost.length > 3;

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    setDisableButton(!handleDisableButton());
  }, [newPost]);

  return (
    <>
      <div>
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
      </div>
      {posts.map((post) => (

        <div key={post.id}>
          <div>{post.initials}</div>
          <p>{post.user}</p>
          <p>{post.post}</p>
        </div>
      ))}
    </>
  );
}
