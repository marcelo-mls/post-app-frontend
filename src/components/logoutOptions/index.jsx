import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';

import { Container, Text } from './style';

export default function LogoutOptions(props) {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const navigate = useNavigate();

  const { onLogout } = props;

  const handleLogout = () => {
    onLogout(null);
    setUserData(null);
    navigate('/wall');
  };

  return (
    <Container>
      <Text>{userData.name}</Text>
      <Button
        variant="contained"
        color="error"
        endIcon={<LogoutIcon />}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
}

LogoutOptions.propTypes = {
  onLogout: PropTypes.function,
}.isRequired;
