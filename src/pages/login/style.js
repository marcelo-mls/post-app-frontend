import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #242424;
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
  background-color: #121212;
  border-radius: 16px;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 16px;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  font-weight: 700;
  border-radius: 100%;
  background-color: #242424;

  transition: background-color .5s;

  :hover {
    transform: scale(1.05);
    background-color: #D32F2F;
  }

  :active {
    transform: scale(1);
    background-color: #242424;
  }
`;
