import styled from 'styled-components';

export const Title = styled.h1<{
  color?: 'black' | 'white';
}>`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
    Arial, sans-serif;
  font-size: 0.9em;
  color: ${(props) => props.color};
  white-space: pre-wrap;
  word-break: break-all;
`;
