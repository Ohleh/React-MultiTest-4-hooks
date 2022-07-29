import { getSuggestedQuery } from '@testing-library/react';
import { useState, useEffect } from 'react';

const APIfetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `http://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then(response => response.data.articles);
};

const News = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, serError] = useState(null);

  useEffect(() => {
    const fetchArticles = () => {
      setIsLoading(true);

      // fetchArticles().then(setArticles); теж саме
      APIfetchArticles({ searchQuery: query, currentPage })
        .then(responseArticles => {
          setArticles(prevArticles => [...prevArticles, ...responseArticles]); // додаємо до попереднього
          setCurrentPage(pevCurrentPage => pevCurrentPage + 1);
        })
        .catch(error => serError(error.message))
        .finnaly(() => setIsLoading(false));
    };

    fetchArticles();
  }, [query, currentPage]); // виконається одни раз при mount, бо в fetchArticles = {}

  const onChangeQuery = query => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
    serError(null);
  };

  return (
    <>
      {error && <h1>ой помилка, все пропало</h1>}
      <NewsSearchForm onSubmit={onChangeQuery} />
      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="nooperer nprefferer">
              {title}
            </a>
          </li>
        ))}
      </ul>

      {/* button */}
      {isLoading && (
        <p>
          Завантажуємо...
          <span
            aria-label="iконка"
            role="img"
            style={{ fontSize: 32, marginLeft: 32 }}
          >
            🏆
          </span>
        </p>
      )}
    </>
  );
};
