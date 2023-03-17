import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

import Card from './style';

export default function PostCard(props) {
  const {
    initials, user, post,
  } = props;

  return (
    <Card>
      <Avatar>{initials}</Avatar>
      <p>{user}</p>
      <p>{post}</p>
    </Card>
  );
}

PostCard.propTypes = {
  id: PropTypes.number,
  initials: PropTypes.string,
  user: PropTypes.string,
  post: PropTypes.string,
}.isRequired;
