import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Random from './random.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App title='TypeScript Demo' age={50}/>
    <Random header='List of users in the DB'/>
  </React.StrictMode>,
)
