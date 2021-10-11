const movies = new TmdbApi();
const searchForm = document.getElementById('search-form')
const search = document.getElementById('search')


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  movies.fetchAndRenderMovies(searchTerm)
});
