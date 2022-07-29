import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');

  //   const handleFormSubmit = pokemonName => {
  //     setPokemonName(pokemonName);
  //   };

  return (
    <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
      <PokemonForm onSubmit={handleFormSubmit} />
      <ToastContainer position="bottom-right" autoClose={500} />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}

// або
// <PokemonForm onSubmit={setPokemonName} />;
// тому що setPokemonName викличеться і йогму передасться pokemonName. і без const handleFormSubmit.
