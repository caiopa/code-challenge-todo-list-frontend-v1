import styled from 'styled-components';

export const Label = styled.label`
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 10px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding: 0.5em;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
