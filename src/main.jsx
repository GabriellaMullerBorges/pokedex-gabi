import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { App } from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import PokemonDetails from './pages/PokemonDetails';
import Elements from './pages/Elements';
import ElementPokemons from './pages/ElementPokemons';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path='search' element={< Search />} />
          <Route path="pokemon/:name" element={<PokemonDetails />} />
          <Route path="elements" element={<Elements />} />
          <Route path="elements/:type" element={<ElementPokemons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)