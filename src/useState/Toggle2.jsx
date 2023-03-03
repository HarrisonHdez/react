import React, { useState } from 'react';

export const Toggle2 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={toggleSwitch}>
        {isOn ? 'Apagar' : 'Encender'}
      </button>
      <p>{isOn ? 'La luz está encendida' : 'La luz está apagada'}</p>
    </div>
  );
};
