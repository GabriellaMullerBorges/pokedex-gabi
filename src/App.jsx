import React from 'react'
import {Outlet} from 'react-router-dom'

import"./index.css"

//import { Style } from './styleApp.js'

export function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}