import React, { useEffect, useState } from 'react'

export const Counter2 = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount( count + 1)
    }

    useEffect(() => {
      if ( count !== 0 && count % 10 === 0 ) {
        alert(`Felicidades llegaste a ${ count } puntos`)
      }
    
      
    }, [count])
    
    
  return (
    <>
        <h1>{ count }</h1>
        <button onClick={ increment }>+1</button>
    </>
  )
}

//* Crea un componente Counter que renderice un contador y tenga un botón para incrementar su valor. Utiliza useState para manejar el estado del contador y useEffect para mostrar un mensaje de felicitación cada vez que el contador llegue a un valor múltiplo de 10.

//* Recuerda que useEffect recibe dos argumentos: una función que se ejecuta después de que el componente se monta o se actualiza, y una lista de dependencias que le indican a React cuándo debe volver a ejecutar la función. En este caso, la función debe mostrar el mensaje de felicitación y la dependencia debe ser el valor del contador.