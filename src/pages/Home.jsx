import React, { useState, useEffect } from 'react';
import { Nav } from '../components/Nav/Nav';
import { Footer } from '../components/Footer/Footer';
import { StyledGrid } from '../components/Cards/PokemonGrid';
import PokemonCard from '../components/Cards/PokemonCard';

const pokeBaseURL = import.meta.env.VITE_API_BASE_URL;

const Home = () => {
  const [Pokes, setPokes] = useState([]);

  const getPokes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    // o endpoint principal devolve apenas nome e URL
    const detailedPokes = await Promise.all(
      data.results.map(async (item) => {
        const pokeRes = await fetch(item.url);
        return await pokeRes.json();
      })
    );

    setPokes(detailedPokes);
  };

  useEffect(() => {
    const displayPokes = `${pokeBaseURL}pokemon?limit=40&offset=0`;
    getPokes(displayPokes);
  }, []);

  return (
    <>
      <Nav />
      <StyledGrid>
        <div className="container"> 
          <h2 className="div-title"> Pokémon Principais: </h2>
          <div className="pokes-container">
            {Pokes.length === 0 && <p style={{ color: 'white', textCenter: 'center' }}>Carregando...</p>}
            {Pokes.length > 0 && Pokes.map((pokemon) => (
              <PokemonCard key={pokemon.id || pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </div>
      </StyledGrid>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;