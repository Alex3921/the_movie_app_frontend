class TmdbApiService {
  constructor(port) {
    this.port = port
  }

  getMovies() {
    fetch(this.port + '/tmdb_api')
    .then(response => response.json())
    .then(data => console.log(data))
  }
}