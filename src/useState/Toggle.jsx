import React, { useState } from 'react';

export const Toggle = () => {
  const [color, setColor] = useState('black');

  const cambiarColor = () => {
    const nuevoColor = color === 'black' ? 'red' : 'black';
    setColor(nuevoColor);
    document.body.style.backgroundColor = nuevoColor;
  };

  return (
    <>
      <button onClick={cambiarColor}>
        { color === 'black' ? 'on' : 'off' }
      </button>
    </>
  );
};





// import React, { useState } from 'react'

// export const Toggle = () => {
//     // const [isOn, setIsOn] = useState(false);
//     const [color, setColor] = useState('white');

//     // const toggleSwitch = () => {
//     //     setIsOn(!isOn);
//     // };
//     const cambiarColor = () => {
//         const nuevoColor = color === 'white' ? 'red' : 'white';
//         setColor(nuevoColor);
//         document.body.style.backgroundColor = nuevoColor;
//     };


//   return (
//     <>
//         <button onClick={ cambiarColor /* toggleSwitch */ }>
//             { color === 'white' ? 'on' : 'off' }
//         </button>
//             {/* <button onClick={cambiarColor}>Cambiar color de fondo</button> */}
        
//     </>
//   )
// }
