import PropTypes from 'prop-types';
import LoginOptions from '../loginOptions';
import LogoutOptions from '../logoutOptions';
import { Container, Text } from './style';

export default function Header(props) {
  const { userData, onLogout } = props;

  return (
    <Container>
      <Text>
        WALL APP
      </Text>
      {
        userData
          ? <LogoutOptions userName={userData.name} onLogout={onLogout} />
          : <LoginOptions />
      }
    </Container>
  );
}

Header.propTypes = {
  userData: PropTypes.object,
  onLogout: PropTypes.func,
}.isRequired;
