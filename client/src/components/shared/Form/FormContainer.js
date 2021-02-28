import styled, { keyframes } from 'styled-components';
const expand = keyframes`
  0% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const FormContainer = styled.div`
  grid-row: 2;
  padding: 0 1rem;
  display: grid;
  place-items: center;
  animation: ${expand} 0.5s ease-in-out;
`;
