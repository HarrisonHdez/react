import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

//* Crea un componente Timer que muestre un contador en la pantalla y se actualice cada segundo. Utiliza useEffect para actualizar el estado del contador cada vez que cambie el tiempo.

//* Para ello, tendrás que:a

//* Inicializar el estado del contador a 0.
//* Utilizar setInterval dentro de un useEffect para actualizar el estado del contador cada segundo.
//* Asegurarte de limpiar el intervalo con clearInterval cuando el componente se desmonte para evitar memory leaks.
//* ¡Suerte con el ejercicio!
