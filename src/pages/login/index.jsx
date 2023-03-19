import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate } from 'react-router-dom';

import {
  MainContainer, Container, SubContainer, Close,
} from './style';

function Login() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Container>
        <Close onClick={() => navigate('/wall')}>X</Close>
        <SubContainer>
          <p>Log in to Wall App</p>
          <TextField label="e-mail" color="success" variant="outlined" />
          <TextField label="Password" color="success" type="password" variant="outlined" />
          <Button
            variant="contained"
            color="success"
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
        </SubContainer>

        <SubContainer>
          <p>{'Don\'t have an account?'}</p>
          <Button
            variant="contained"
            color="primary"
            endIcon={<PersonAddAltIcon />}
            onClick={() => navigate('/wall/register')}
          >
            Sign Up for Wall App
          </Button>
        </SubContainer>

      </Container>
    </MainContainer>
  );
}

export default Login;
