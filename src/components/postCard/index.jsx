import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

import { Card, TextContainer, Delete } from './style';
import API from '../../services/axios';

export default function PostCard(props) {
  const handleDelete = (id) => {
    API.delete
  };
  const {
    id, initials, user, post,
  } = props;

  return (
    <Card>
      <Delete onClick={() => console.log(id)}>
        <DeleteIcon fontSize="small" />
      </Delete>
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
}.isRequired;
