import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';

import { Container, Text } from './style';

export default function LogoutOptions(props) {
  const { userName, onLogout } = props;

  return (
    <Container>
      <Text>{userName}</Text>
      <Button
        variant="contained"
        color="error"
        endIcon={<LogoutIcon />}
        onClick={onLogout}
      >
        Logout
      </Button>
    </Container>
  );
}

LogoutOptions.propTypes = {
  onLogout: PropTypes.function,
}.isRequired;
