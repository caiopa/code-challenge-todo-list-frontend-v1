import styled, { keyframes } from 'styled-components';

export const Link = styled.a<{
  color?: 'black' | 'white';
}>`
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;
  display: flex;

  align-items: center;
  font-weight: bold;
  transition: 0.5s all ease-out;
  color: ${({ color }) => (color === 'white' ? 'white' : 'black')};

  &:hover {
    opacity: 0.6;
  }
`;

const ping = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`;

export const BackLink = styled(Link)`
  color: black;
  font-size: 20px;

  margin-top: 0;
  &:hover {
    animation: ${ping} 0.9s infinite;
  }
`;

export const LinkDetail = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
