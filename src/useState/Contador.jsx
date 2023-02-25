import React, { useState } from 'react'

export const Contador = ({ value }) => {
    const [contador, setContador] = useState( value )

    const incrementar = () => {
        setContador( contador + 1 )
    }
    const reset = () => {
        setContador( value )
    }
    const decrementar = () => {
        setContador( contador - 1 )
    }

  return (

    <>
        <h1>{ contador }</h1>
        <button onClick={ incrementar }>+1</button>
        <button onClick={ reset  }>Reset</button>
        <button onClick={ decrementar }>-1</button>
    </>
  )
}

























//* Crea un componente de contador que muestre un número y tenga dos botones, uno para incrementar y otro para decrementar el número. Para implementar esto, puedes utilizar la función useState de React para mantener el estado del número y las funciones para manejar los eventos de los botones.


//* Crea un nuevo componente de React llamado "Contador".
//* En el cuerpo del componente, utiliza la función useState de React para inicializar el estado del número en 0.
//* Renderiza el número actual en la pantalla del componente.
//* Agrega dos botones debajo del número, uno para incrementar y otro para decrementar.
//* Agrega los manejadores de eventos para los botones que actualicen el estado del número utilizando la función setEstado de useState.
//* Verifica que el contador se incremente y decremente correctamente al hacer clic en los botones.
//* ¡Buena suerte practicando con useState en React!