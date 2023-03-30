import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

import { Card, TextContainer, Delete } from './style';

export default function PostCard(props) {
  const [isRemoving, setIsRemoving] = useState(false);

  const {
    id,
    initials,
    user,
    post,
    userId,
    userData,
    onDelete,
  } = props;

  const handleRemoveCard = () => {
    setIsRemoving(true);
    setTimeout(() => onDelete(id), 300);
  };

  return (
    <Card className={isRemoving && 'fade-out'}>
      { userData && userData.id === userId && (
        <Delete onClick={handleRemoveCard}>
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
