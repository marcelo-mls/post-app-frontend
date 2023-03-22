import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { insertUser } from '../../services/api.users';
import { MainContainer, Container, Close } from '../login/style';

export default function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [feedback, setFeedBack] = useState('Sign Up for Wall App');

  const navigate = useNavigate();

  const getInitials = (fullName) => {
    let initials;
    const name = fullName.split(' ');

    if (name.length === 1) {
      initials = (name[0][0]).toUpperCase();
    } else {
      const lastName = name[name.length - 1];
      initials = (`${name[0][0]}${lastName[0]}`).toUpperCase();
    }

    return initials;
  };

  const handleAddUser = async () => {
    const newUser = {
      name: userName,
      initials: getInitials(userName),
      email: email.toLowerCase(),
      password,
    };

    const response = await insertUser(newUser);

    if (response.status === 201) {
      setFeedBack('Successfully created. Login to continue.');
      setUserName('');
      setEmail('');
    } else if (response.status === 409) {
      setFeedBack('User already exists');
    } else {
      setFeedBack('Something went wrong. Try again');
    }

    setPassword('');
  };

  const handleDisableButton = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    return (userName.length > 3
        && emailRegex.test(email)
        && password.length >= 6
    );
  };

  useEffect(() => {
    setDisableButton(!handleDisableButton());
  }, [userName, password, email]);

  return (
    <MainContainer>
      <Container>

        <Close onClick={() => navigate('/wall')}>X</Close>
        <div>
          <p>{feedback}</p>
          <TextField
            label="Name"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="e-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<PersonAddAltIcon />}
            onClick={handleAddUser}
            disabled={disableButton}
          >
            Sign Up
          </Button>
        </div>

        <div>
          <p>Already have an account?</p>
          <Button
            variant="contained"
            color="success"
            endIcon={<LoginIcon />}
            onClick={() => navigate('/wall/login')}
          >
            Login
          </Button>
        </div>

      </Container>
    </MainContainer>
  );
}
