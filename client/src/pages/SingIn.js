import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SingIn = () => (
  <SingInStyled>
    Iniciar Sección
    <Link to="/">Home</Link>
  </SingInStyled>
);

const SingInStyled = styled.div`
  background-color: green;
  padding: 1rem;
`;

export default SingIn;
