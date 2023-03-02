import React, { useEffect, useState } from 'react'

export const Temporizador = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => setTime(time - 1), 1000 );
    console.log(`EL VALOR ACTUAL ES ${ time }`);
    return () => {
      clearInterval( interval );
    }
  }, [time])
  

  return (
    <>
      <h1>{ time }</h1>
    </>
  )
}













//* Crea un componente llamado Temporizador que tenga un contador regresivo que comience desde 10 y se vaya decrementando en 1 cada segundo. Este componente deberá tener un useEffect que se active cada vez que el temporizador cambie y muestre un mensaje en la consola con el valor actual del temporizador., así que no dudes en seguir practicando con ejercicios cada vez más complejos.








// import React, { useEffect, useState } from 'react'

// export const Temporizador = () => {
//   const [temporizador, setTemporizador] = useState(10);

//   useEffect(() => {
//     const interval = setInterval(() => setTemporizador( temporizador - 1 ), 1000);
//     console.log(`EL VALOR ACTUAL ES ${ temporizador }`);
//     return () => {
//       clearInterval(interval);
//     }
//   }, [temporizador])

//   return (
//     <>
//       <h1>{ temporizador }</h1> 
      
//     </>
//   )
// }