import styled from 'styled-components';

export const TodoCardContainer = styled.section`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  overflow-wrap: break-word;
  flex-direction: column;
  width: 50%;
  border-radius: 10px;
  padding: 20px;
  gap: 1em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 70%;
  }
`;
