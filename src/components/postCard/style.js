import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
  width: 75%;
  border-bottom: 1px solid #1a1a1a;

  opacity: 0;
  transform: translateY(-20px);
  animation: fadeIn 0.8s ease forwards;

  &.fade-out {
    animation: fadeOut 0.3s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
    opacity: 1;
    transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(20px);
    }
  }

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
  color: #242424;

  transition: color .5s;

  :hover {
    color: #D32F2F;
    transform: scale(1.1);
  }
`;
