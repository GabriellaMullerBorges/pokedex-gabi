import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PokemonCard from '../components/Cards/PokemonCard';
import { Footer } from '../components/Footer/Footer';
import { Nav } from '../components/Nav/Nav';
import { StyledGrid } from '../components/Cards/PokemonGrid';

const pokeBaseURL = import.meta.env.VITE_API_BASE_URL;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const query = searchParams.get("q") || searchParams.get("query") || "";

  const getSearchedPokes = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(`${pokeBaseURL}pokemon?limit=10000&offset=0`);
      const data = await res.json();

      // Filtra todos os Pokémons cujo nome inclui o texto digitado
      const filteredResults = data.results.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      const detailedPokes = await Promise.all(
        filteredResults.map(async (item) => {
          const pokeRes = await fetch(item.url);
          return await pokeRes.json();
        })
      );

      setPokes(detailedPokes);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
      setPokes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchedPokes();
  }, [query]);

  return (
    <>
      <Nav />
      <StyledGrid>
        <div className='page'>  
          <div>
            <div className='container'>
              <h2 className='div-title'>
                Resultados para: <span className='query-text'>{query}</span>
              </h2>

              <div className="pokes-container">
                {loading && <p style={{ color: 'white' }}>Buscando Pokémon...</p>}

                {!loading && pokes.length === 0 && (
                  <p className='notfind'>Não encontramos resultados para sua pesquisa</p>
                )}

                {!loading && pokes.length > 0 && pokes.map((pokemon) => (
                  <PokemonCard key={pokemon.id || pokemon.name} pokemon={pokemon} />
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </StyledGrid>
    </>
  );
};

export default Search;
