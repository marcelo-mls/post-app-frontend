import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import Container from './style';

export default function LoginOptions() {
  return (
    <Container>
      <Button
        variant="contained"
        color="success"
        endIcon={<LoginIcon />}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="primary"
        endIcon={<PersonAddAltIcon />}
      >
        Sign Up
      </Button>
    </Container>
  );
}
