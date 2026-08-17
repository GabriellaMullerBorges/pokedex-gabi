import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav/Nav';
import { Footer } from '../components/Footer/Footer';
import { StyledGrid } from '../components/Cards/PokemonGrid';

const pokeBaseURL = import.meta.env.VITE_API_BASE_URL;

const Elements = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTypes = async () => {
      try {
        const res = await fetch(`${pokeBaseURL}type`);
        const data = await res.json();
   
        const filteredTypes = data.results.filter(
          (t) => t.name !== 'unknown'
        );
        setTypes(filteredTypes);
      } catch (error) {
        console.error("Erro ao buscar elementos:", error);
      } finally {
        setLoading(false);
      }
    };

    getTypes();
  }, []);

  return (
    <>
      <Nav />
      <StyledGrid>
        <div className="pokes-container">
          <h2>Elementos Pokémon</h2>

          {loading && <p>Carregando elementos...</p>}

          {!loading && (
            <div className="pokes-container">
              {types.map((type) => (
                <Link
                  key={type.name}
                  to={`/elements/${type.name}`}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    backgroundColor: '#333',
                    color: 'white',
                    textDecoration: 'none',
                    textTransform: 'capitalize'
                  }}
                >
                  {type.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </StyledGrid>
      <Footer />
    </>
  );
};

export default Elements;
