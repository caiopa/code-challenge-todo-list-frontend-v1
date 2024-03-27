import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;


  }
`;
export const MainPage = styled.main<{
  justify?: 'between' | 'center' | 'start' | 'end' | 'space-around' | 'space-evenly';
}>`
  display: grid;
  gap: 1em;
  justify-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Paragraph = styled.p`
  font-family: monospace;
  font-size: 14px;
  text-align: justify;
`;

export const Label = styled.label`
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 10px;
`;

export const FlexContainer = styled.div<{
  justify?:
    | 'space-between'
    | 'center'
    | 'start'
    | 'end'
    | 'space-around'
    | 'space-evenly';
}>`
  display: flex;
  overflow-x: wrap;
  width: 100%;

  justify-content: ${(props) => props.justify || 'center'};
`;

export const FlexContainerCenter = styled(FlexContainer)`
  justify-content: center;
  gap: 1em;
  align-items: center;
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid black;
  padding: 0.5em;
  height: 150px;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const ErrorMensage = styled.p`
  color: red;
  font-size: 14px;
`;

export const FlexCol = styled.div<{
  align?: 'between' | 'center' | 'start' | 'end' | 'space-around' | 'space-evenly';
}>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: ${(props) => props.align};
`;
