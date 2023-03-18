import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

import { Card, TextContainer } from './style';

export default function PostCard(props) {
  const {
    initials, user, post,
  } = props;

  return (
    <Card>
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
