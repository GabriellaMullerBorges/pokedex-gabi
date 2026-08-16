import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCatchingPokemon } from 'react-icons/md';

const imageURL = import.meta.env.VITE_POKEMON_IMG;

const PokemonCard = ({ pokemon, showLink = true }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Pega a imagem pela URL do .env + o ID do Pokémon, ou cai no fallback da própria API
  const pokemonImage = pokemon.id 
    ? `${imageURL}${pokemon.id}.png` 
    : pokemon.sprites?.other?.['official-artwork']?.front_default;

  return (
    <div className="poke-card" style={{ display: imageError ? 'none' : 'flex' }}>
      <div className="poster-box">
        <Link to={`/pokemon/${pokemon.name}`}>
          <img 
            src={pokemonImage} 
            alt={pokemon.name} 
            className="poster" 
            onError={handleImageError} 
          />
        </Link>
      </div>
      <h2>{pokemon.name}</h2>
      <p>
        <MdCatchingPokemon /> #{String(pokemon.id || '').padStart(3, '0')}
      </p>
      {showLink && <Link to={`/pokemon/${pokemon.name}`}>Detalhes</Link>}
    </div>
  );
};

export default PokemonCard;