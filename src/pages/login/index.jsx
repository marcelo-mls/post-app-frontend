import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { MainContainer, Container, SubContainer } from './style';

function Login() {
  return (
    <MainContainer>
      <Container>

        <SubContainer>
          <p>Log in to Wall App</p>
          <TextField label="e-mail" variant="outlined" />
          <TextField label="Password" type="password" variant="outlined" />
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
          >
            Sign Up for Wall App
          </Button>
        </SubContainer>

      </Container>
    </MainContainer>
  );
}

export default Login;
