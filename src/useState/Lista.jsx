import React from 'react'
import { elementos } from './datosLista'
import { Lista2 } from './Lista2'

export const Lista = () => {


  return (
    <>

      <h1>Hola ingresa tus tareas</h1>
       <Lista2 elementos={ elementos } />
    </>
  )
}
