import React, { useState } from 'react'

export const Formulario = () => {
    const [formState, setFormState] = useState('');


    const enviarTexto = () => {
        setFormState(  )
    }
    const onSubmit = (event) => {
        event.preventDefault()
    }
    
  return (
    <form onSubmit={ onSubmit }>
        <input type="text"
            placeholder='hola'
            value={ formState }
            onChange={ enviarTexto }
        />
        <button>ENVIAR</button>
    </form>
  )
}
    