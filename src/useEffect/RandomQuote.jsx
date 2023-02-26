import React, { useEffect, useState } from 'react'

export const RandomQuote = () => {
    const [quote, setQuote] = useState('');

    const getQuote = async () => {
        const resp = await fetch('https://api.quotable.io/random');
        const data = await resp.json();
        setQuote(`${data.content} ${ data.author }`);
    }

    useEffect(() => {
        getQuote()
      
    }, [])
    
    return (
        <>
            <h1>{ quote }</h1>
            <button onClick={ getQuote }>Cambiar Cita</button>  
        </>
    )
}











//? https://api.quotable.io/random
//* Crea un nuevo componente llamado RandomQuote que muestre una cita aleatoria cada vez que se carga la página.

//* Crea una lista de citas (puedes utilizar citas famosas o crear tus propias citas). Debe haber al menos 5 citas en la lista.

//* Utiliza el hook useState para almacenar la cita actual que se está mostrando.

//* Utiliza el hook useEffect para actualizar la cita actual cada vez que se carga la página.

//* Cada vez que se carga la página, muestra una cita aleatoria de la lista.

//* Añade un botón debajo de la cita actual que permita al usuario cargar una nueva cita aleatoria.








// import React, { useState, useEffect } from 'react';

// function RandomQuote() {
//   const [quote, setQuote] = useState("");

//   const getQuote = async () => {
//     const response = await fetch("https://api.quotable.io/random");
//     const data = await response.json();
//     setQuote(`${data.content} - ${data.author}`);
//   };

//   useEffect(() => {
//     getQuote();
//   }, []);

//   return (
//     <div>
//       <h1>{quote}</h1>
//       <button onClick={getQuote}>
//         Nueva cita
//       </button>
//     </div>
//   );
// }

// export default RandomQuote;

