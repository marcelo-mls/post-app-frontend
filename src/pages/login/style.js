import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 25%;
  height: 75%;
  min-width: 350px;
  min-height: 500px;
  background-color: #fff;
  border-radius: 16px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 16px;
  color: #000;
`;
