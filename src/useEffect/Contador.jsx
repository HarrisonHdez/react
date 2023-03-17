import React, { useEffect, useState } from 'react'

export const Contador = () => {
    const [count, setCount] = useState(0);

    const IncrementCount = () => {
        setCount( count + 1 );
    }
    useEffect(() => {
      document.title = `Contador: ${count}`;
    
      
    }, [count])
    
  return (
    <>
        <h1>{count}</h1>
        <button onClick={ IncrementCount }>+1</button>
    </>
  )
}



// //* Crea un componente de React que renderice un contador. El componente debe tener un estado interno llamado count que empieza en 0. También debe tener un botón que permita incrementar el contador en 1 cuando se hace clic en él.

// //* Además, utiliza useEffect para que el título de la página se actualice con el valor actual del contador cada vez que cambie.

// //* Recuerda que debes importar la función useEffect de React en tu componente y utilizarla dentro de tu componente.

// //* ¡Buena suerte practicando!



// import React, { useEffect, useState } from 'react'

// export const Contador = () => {
//     const [count, setCount] = useState(110)

//     const increment = () => {
//         setCount( count + 1 )
//     }

//     useEffect(() => {
//       document.title = `Contador ${ count }`
//     }, [count])
    

//   return (
//         <>
//             <h2>{ count }</h2>
//             <button onClick={ increment }>+1</button>
            
//         </>
//     )
// }


