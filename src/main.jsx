import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import { FirstApp } from './FirstApp.jsx'
import './index.css'
import { GiftExpertApp } from './GiftExpertApp.jsx'
import { GiftGrid } from './Components/GiftGrid.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftGrid />
  </React.StrictMode>,
)
