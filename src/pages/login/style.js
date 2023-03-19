import styled from 'styled-components';

export const MainContainer = styled.div`
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
  background-color: #1a1a1a;
  border-radius: 16px;
  position: relative;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 16px;
`;

export const Close = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  font-weight: 700;
  border-radius: 100%;
  background-color: #242424;

  :hover {
    transform: scale(1.05);
    background-color: #1a1a1a;
  }

  :active {
    transform: scale(1);
    background-color: #242424;
  }
`;
