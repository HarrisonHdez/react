import React, { useEffect, useState } from 'react'

export const Reloj = () => {
  const [rejoj, setRejoj] = useState( new Date() );

  useEffect(() => {
    const interval = setInterval( () => setRejoj( new Date() ), 1000)
  
    return () => {
      clearInterval( interval )
    }
  }, [rejoj])
  

  return (
    <>
      <h1>{rejoj.toLocaleTimeString()}</h1>
    </>
  )
}    

// import React, { useEffect, useState } from 'react'

// export const Reloj = () => {
//     const [time, setTime] = useState( new Date() );

//     useEffect(() => {
//       const interval = setInterval(() => setTime( new Date() ),  1000);
    
//       return () => clearInterval( interval )
        
//     }, [time])
    
//   return (
//     <>
    
//         <h1>{time.toLocaleTimeString()}</h1>
    
//     </>
//   )
// }





//* Crea un componente llamado Reloj que renderice un reloj digital que muestre la hora actual. Este componente deberá tener un useEffect que se active cada segundo y actualice la hora mostrada en el reloj.

//* Este componente deberá tener un useEffect que se active cada segundo y actualice la hora mostrada en el reloj.