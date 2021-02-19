import React from 'react';
import { Link } from 'react-router-dom';

function home() {
  return (
    <div>
      <div> Hola</div>
      <Link to="/sign_in"> Iniciar Sección</Link>
    </div>
  );
}

export default home;
