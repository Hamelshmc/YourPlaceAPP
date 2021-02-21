import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

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
