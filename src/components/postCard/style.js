import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 25px;
  width: 75%;
  border-bottom: 1px solid #1a1a1a;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h1 {
    font-weight: 800;
    font-size: 16px;
  }

  p {
    text-align: left;
  }
`;

export const Delete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: inherit;

  :hover {
    color: #f44336;
    transform: scale(1.05);
  }
`;
