import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import SideBar from './components/SideBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideBar />
  </React.StrictMode>,
)
