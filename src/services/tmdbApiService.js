class TmdbApiService {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/tmdb_api'
  }

  getMovies() {
    return fetch(this.baseUrl).then(resp => resp.json())
  }
}