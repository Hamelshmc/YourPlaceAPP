import styled, { keyframes } from 'styled-components';

const expand = keyframes`
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const FormContainer = styled.div`
  animation: ${expand} 0.5s ease-in-out;
`;

export default FormContainer;
