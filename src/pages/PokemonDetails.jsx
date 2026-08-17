import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PokemonCard from '../components/Cards/PokemonCard';
import { Nav } from '../components/Nav/Nav';
import { Footer } from '../components/Footer/Footer';
import { StyledGrid } from '../components/Cards/PokemonGrid';
import { MdOutlineArrowBack } from 'react-icons/md';

import {
  DetailsContainer,
  CardWrapper,
  CardWrapperBox,
  InfoBox,
  TypeGroup,
  TypeBadge,
  StatsGroup
} from '../components/Cards/detailsStyle';

const pokeBaseURL = import.meta.env.VITE_API_BASE_URL;

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getPokemonDetails = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`${pokeBaseURL}pokemon/${name.toLowerCase()}`);
      if (!res.ok) throw new Error("Pokémon não encontrado");
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, [name]);

  return (
    <>
      <Nav />
      <StyledGrid>
        <div className="page container">

          {loading && <p>Carregando detalhes...</p>}

          {error && (
            <p className="notfind">Não foi possível carregar as informações deste Pokémon.</p>
          )}

          {!loading && pokemon && (
            <DetailsContainer>
              <CardWrapper>
                <CardWrapperBox className="pokes-container">
                    <PokemonCard pokemon={pokemon} showLink={false} />
                </CardWrapperBox>
              </CardWrapper>

              <InfoBox>
                <h1>{pokemon.name}</h1>
                
                <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
                <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>

                <TypeGroup>
                  <h3>Tipos:</h3>
                  <div className="types-list">
                    {pokemon.types.map((typeInfo) => (
                      <TypeBadge key={typeInfo.type.name}>
                        {typeInfo.type.name}
                      </TypeBadge>
                    ))}
                  </div>
                </TypeGroup>

                <StatsGroup>
                  <h3>Estatísticas Base:</h3>
                  <ul>
                    {pokemon.stats.map((statInfo) => (
                      <li key={statInfo.stat.name}>
                        <strong>{statInfo.stat.name}:</strong> {statInfo.base_stat}
                      </li>
                    ))}
                  </ul>
                </StatsGroup>
              </InfoBox>
            </DetailsContainer>
          )}
        </div>
      </StyledGrid>
      <Footer />
    </>
  );
};

export default PokemonDetails;

