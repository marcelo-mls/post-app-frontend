import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate } from 'react-router-dom';

import Container from './style';

export default function LoginOptions() {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        variant="contained"
        color="success"
        endIcon={<LoginIcon />}
        onClick={() => navigate('/wall/login')}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="primary"
        endIcon={<PersonAddAltIcon />}
        onClick={() => navigate('/wall/register')}
      >
        Sign Up
      </Button>
    </Container>
  );
}
