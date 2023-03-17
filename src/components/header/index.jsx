import { useState } from 'react';

import LoginOptions from '../loginOptions';
import LogoutOptions from '../logoutOptions';
import { Container, Text } from './style';

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Container>
      <Text onClick={() => setIsLogged(!isLogged)}>
        WALL APP
      </Text>
      {
        isLogged
          ? <LogoutOptions />
          : <LoginOptions />
      }
    </Container>
  );
}
