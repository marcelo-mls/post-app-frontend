import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import { Container, Text } from './style';

export default function LogoutOptions() {
  const navigate = useNavigate();

  return (
    <Container>
      <Text>User</Text>
      <Button
        variant="contained"
        color="error"
        endIcon={<LogoutIcon />}
        onClick={() => navigate('/wall')}
      >
        Logout
      </Button>
    </Container>
  );
}
