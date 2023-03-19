import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { getUser } from '../../services/api.users';
import {
  MainContainer, Container, SubContainer, Close,
} from './style';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [feedback, setFeedBack] = useState('Log in to Wall App');

  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await getUser({ email, password });
    if (response.status === 200) {
      localStorage.setItem('userData', JSON.stringify(response.data));

      setPassword('');
      setEmail('');
      navigate('/wall');
    } else if (response.status === 401) {
      setFeedBack('Incorrect data');
      setEmail('');
      setPassword('');
    } else if (response === 'Request failed with status code 404') {
      setFeedBack('User does not exist. Sign up to continue');
      setPassword('');
    } else {
      setFeedBack('Something went wrong. Try again');
      setPassword('');
    }
  };

  const handleDisableButton = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    return (emailRegex.test(email) && password.length >= 4);
  };

  useEffect(() => {
    setDisableButton(!handleDisableButton());
  }, [password, email]);

  return (
    <MainContainer>
      <Container>
        <Close onClick={() => navigate('/wall')}>X</Close>
        <SubContainer>
          <p>{feedback}</p>
          <TextField
            label="e-mail"
            color="success"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            color="success"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            endIcon={<LoginIcon />}
            onClick={handleLogin}
            disabled={disableButton}
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
