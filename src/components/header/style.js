import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-grow: 0;
  flex-basis: auto;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  padding: 0 3rem;
`;

export const Text = styled.p`
  font-weight: 800;
  font-size: 32px;
  border: 1px solid #242424;
  padding: 0 8px;
  border-radius: 8px;
  user-select: none;

  :hover {
    transform: scale(1.05);
  }
`;
