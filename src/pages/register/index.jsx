import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate } from 'react-router-dom';

import {
  MainContainer, Container, SubContainer, Close,
} from '../login/style';

export default function Register() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Container>

        <Close onClick={() => navigate('/wall')}>X</Close>
        <SubContainer>
          <p>Sign Up for Wall App</p>
          <TextField label="Name" variant="outlined" />
          <TextField label="e-mail" variant="outlined" />
          <TextField label="Password" type="password" variant="outlined" />
          <Button
            variant="contained"
            color="primary"
            endIcon={<PersonAddAltIcon />}
          >
            Sign Up
          </Button>
        </SubContainer>

        <SubContainer>
          <p>Already have an account?</p>
          <Button
            variant="contained"
            color="success"
            endIcon={<LoginIcon />}
            onClick={() => navigate('/wall/login')}
          >
            Login
          </Button>
        </SubContainer>

      </Container>
    </MainContainer>
  );
}
