import { useState } from 'react';

import LoginOptions from '../loginOptions';
import LogoutOptions from '../logoutOptions';
import { Container, Text } from './style';

export default function Header() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));

  return (
    <Container>
      <Text>
        WALL APP
      </Text>
      {
        userData
          ? <LogoutOptions onLogout={setUserData} />
          : <LoginOptions />
      }
    </Container>
  );
}
