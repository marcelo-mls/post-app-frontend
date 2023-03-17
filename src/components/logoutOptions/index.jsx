import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import { Container, Text } from './style';

export default function LogoutOptions() {
  return (
    <Container>
      <Text>User</Text>
      <Button
        variant="contained"
        color="error"
        endIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </Container>
  );
}
