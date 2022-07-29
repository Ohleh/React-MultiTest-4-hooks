import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ImSearch } from 'react-icons/im';
// компонент я кого svg:
// import {ReactComponent as MyIcon} from "./"

const styles = { form: { marginBottom: 20 } };

const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = e => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      return toast.error('Enter poky name');
    }

    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">
        {/* <ImSearch style={{ marginRight: 8 }} /> */}
        Find
      </button>
    </form>
  );
};

export default PokemonForm;
