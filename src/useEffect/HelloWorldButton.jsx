import React, { useState, useEffect } from 'react';

function HelloWorldButton() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Haz clic en el botón para saludar al mundo');
  }, []);

  const handleClick = () => {
    setMessage('¡Hola, mundo!');
  };

  return (
    <div>
      <button onClick={handleClick}>Saludar</button>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorldButton;

//* Crea un componente HelloWorldButton que renderice un botón y un párrafo. Cuando el usuario haga clic en el botón, el párrafo debe actualizarse con un mensaje que diga "¡Hola, mundo!".

//* Para hacerlo, utiliza useState para almacenar el estado del mensaje y useEffect para actualizarlo cuando el usuario haga clic en el botón.

//* ¡A practicar!
