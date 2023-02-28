import React, { useEffect, useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(10);

    const incrementCounter = () => {
      setCounter( counter + 1  );
    }
    const decrementCounter = () => {
      setCounter( counter - 1 );
    }

    useEffect(() => {
      console.log(`EL NUEVO VALOR es ${ counter }`);
    
      return () => {
        console.log(`El valor se desmonto`);
      }
    }, [counter])
    

    return (
      <>
        <h1>{ counter }</h1>
        <button onClick={ incrementCounter }>+1</button>
        <button onClick={ decrementCounter }>-1</button>
      </>
    )
}






















// //* Crea un componente de función llamado "Counter" que tenga un estado interno "count" que comience en 0. Agrega dos botones: uno para aumentar el contador y otro para disminuirlo en uno. También muestra el valor actual del contador en la pantalla.

// //* Utiliza useEffect para imprimir en la consola el valor actual del contador cada vez que se actualiza. No olvides limpiar el efecto cuando el componente se desmonta.

// //* ¡Buena suerte practicando!






// import React, { useEffect, useState } from 'react'

// export const Counter = () => {
//     const [count, setCount] = useState(10)

//     const increment = () => {
//         setCount( count + 1)
//     }
//     const decrement = () => {
//         setCount( count + 1)
//     }

//     useEffect(() => {
//       console.log(`EL VALOR DEL CONTADOR SE ACTUALIZO A : ${ count }`);
    
//       return () => {
//         console.log( `EL COMPONENTE SE DESMONTO` );
//       }
//     }, [count])
    

//   return (
//         <>
//             <h1> { count }</h1>
//             <button onClick={ increment  } >+1</button>
//             <button onClick={ decrement } >-1</button>
            
//         </>
//     )
// }







