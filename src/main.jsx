import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contador } from './useState/Contador'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador value={ 10 } />
  </React.StrictMode>,
)
