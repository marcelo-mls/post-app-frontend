import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

import { Card, TextContainer, Delete } from './style';
import { deletePost } from '../../services/api.posts';

export default function PostCard(props) {
  const handleDelete = async (id) => {
    await deletePost(id);
  };

  const {
    id,
    initials,
    user,
    post,
    userId,
    userData,
  } = props;

  return (
    <Card>
      { userData && userData._id === userId && (
        <Delete onClick={() => handleDelete(id)}>
          <DeleteIcon fontSize="small" />
        </Delete>
      )}
      <Avatar>{initials}</Avatar>
      <TextContainer>
        <h1>{user}</h1>
        <p>{post}</p>
      </TextContainer>
    </Card>
  );
}

PostCard.propTypes = {
  id: PropTypes.number,
  initials: PropTypes.string,
  user: PropTypes.string,
  post: PropTypes.string,
  userId: PropTypes.string,
  userData: PropTypes.object,
}.isRequired;
