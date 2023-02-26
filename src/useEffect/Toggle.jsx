import React, { useEffect, useState } from 'react'

export const Toggle = () => {
    const [encendido, setEncendido] = useState(false)

    const encendidoApagado = () => {
        setEncendido( !encendido )
    }

    useEffect(() => {
      console.log(`Estado: ${ encendido }`);
    
    }, [encendido])
    

    return (
        <>
            <button onClick={ encendidoApagado }>APAGAR/ENCENDER</button>  
        </>
    )
}

//* Crea un componente llamado Toggle que tenga un botón que cambie el estado del componente entre "encendido" y "apagado" cada vez que sea presionado. Este componente deberá tener un useEffect que se active cada vez que el estado del componente cambie y muestre un mensaje en la consola con el valor actual del estado.