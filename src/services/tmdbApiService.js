class TmdbApiService {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/tmdb_api'
    this.searchUrl = 'http://localhost:3000/api/v1/tmdb_api/search/'
  }

  getMovies() {
    return fetch(this.baseUrl).then(resp => resp.json())
  }

  searchMovies(query) {
    return fetch(this.searchUrl + query).then(resp => resp.json())
  }
}