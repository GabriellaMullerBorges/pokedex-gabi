import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { App } from './App'
import Home from './pages/Home'
import Search from './pages/Search'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='search' element={< Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)