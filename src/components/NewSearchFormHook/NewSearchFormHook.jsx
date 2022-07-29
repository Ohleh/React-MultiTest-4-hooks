import { useState } from 'react';

const NewSearchFormHook = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={() => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
