import React, { useState } from 'react';
import { FormularioHijo } from './FormularioHijo';

function FormularioPadre() {
  const [datos, setDatos] = useState('');

  const enviarFormulario = (formState) => {
    setDatos(formState);
    console.log("Datos enviados:", formState);
  }

  return (
    <div>
      <h1>Formulario de ejemplo</h1>
      <FormularioHijo enviarFormulario={enviarFormulario} />
      <p>Datos enviados: {datos}</p>
    </div>
  );
}

export default FormularioPadre;
