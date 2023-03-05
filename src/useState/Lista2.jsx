import React, { useState } from 'react';

export const Lista2 = ({ elementos }) => {
  const [lista, setLista] = useState(elementos);
  const [nuevoElemento, setNuevoElemento] = useState('');

  const handleNuevoElementoChange = (event) => {
    setNuevoElemento(event.target.value);
  };

  const agregarElemento = () => {
    if (nuevoElemento.trim() !== '' && nuevoElemento.length >= 4) {
      setLista([...lista, nuevoElemento]);
      setNuevoElemento('');
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          value={nuevoElemento}
          onChange={handleNuevoElementoChange}
          placeholder="Ingrese un nuevo elemento"
        />
        <button type="submit" onClick={agregarElemento}>Agregar elemento</button>
      </form>
      <h2>Lista de elementos:</h2>
      <ul>
        {lista.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
      
    </>
  );
};

   