import React, { useState } from 'react';

export const FormularioHijo = ({ enviarFormulario }) => {
  const [formState, setFormState] = useState('');

  const enviarTexto = (event) => {
    setFormState(event.target.value);
  }
      
  const onSubmit = (event) => {
    event.preventDefault();
    if (formState.length >= 4) {
      enviarFormulario(formState);
      setFormState('');
    }
  }
             
  return (
    <form onSubmit={ onSubmit }>
      <input    
        type="text"
        placeholder='hola'
        value={ formState }
        onChange={ enviarTexto } 
        required  
      /> 
      <button>ENVIAR</button> 
    </form> 
  ); 
}    

    