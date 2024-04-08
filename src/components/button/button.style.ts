import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 14px;
  border: none;
  font-weight: bold;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    opacity: 0.4;
  }
`;

export const ButtonDelete = styled(Button)`
  color: red;

  &:hover {
    color: black;
  }
`;
