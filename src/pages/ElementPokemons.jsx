import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PokemonCard from '../components/Cards/PokemonCard';
import { Nav } from '../components/Nav/Nav';
import { Footer } from '../components/Footer/Footer';
import { StyledGrid } from '../components/Cards/PokemonGrid';
import { MdOutlineArrowBack } from 'react-icons/md';

const pokeBaseURL = import.meta.env.VITE_API_BASE_URL;

const ElementPokemons = () => {
  const { type } = useParams();
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokesByType = async () => {
      setLoading(true);
      try {
        // 1. Busca os dados do tipo escolhido
        const res = await fetch(`${pokeBaseURL}type/${type}`);
        const data = await res.json();

        // 2. Mapeia as promessas para buscar os detalhes/fotos de cada Pokémon retornado
        const detailedPokes = await Promise.all(
          data.pokemon.map(async (item) => {
            const pokeRes = await fetch(item.pokemon.url);
            return await pokeRes.json();
          })
        );

        setPokes(detailedPokes);
      } catch (error) {
        console.error("Erro ao buscar Pokémon por elemento:", error);
      } finally {
        setLoading(false);
      }
    };

    getPokesByType();
  }, [type]);

  return (
    <>
      <Nav />
      <StyledGrid>
        <div className="page container">
          <Link to="/elements" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <MdOutlineArrowBack size={24} /> Voltar para Elementos
          </Link>

          <h2>Pokémon do Tipo: {type}</h2>

          <div className="pokes-container">
            {loading && <p style={{ color: 'white' }}>Carregando Pokémon de {type}...</p>}

            {!loading && pokes.length === 0 && (
              <p className="notfind">Nenhum Pokémon encontrado para este elemento.</p>
            )}

            {!loading && pokes.map((pokemon) => (
              <PokemonCard key={pokemon.id || pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </div>
      </StyledGrid>
      <Footer />
    </>
  );
};

export default ElementPokemons;
