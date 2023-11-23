import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import { FirstApp } from './FirstApp.jsx'
import './index.css'
import { GiftExpertApp } from './GiftExpertApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftExpertApp />
  </React.StrictMode>,
)
