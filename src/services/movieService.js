class MovieService {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/movies";
    this.searchUrl = "http://localhost:3000/api/v1/movies/search/";
  }

  async getMovies() {
    return await fetch(this.baseUrl).then((resp) => resp.json());
  }

  async searchMovies(query) {
    return await fetch(this.searchUrl + query).then((resp) => resp.json());
  }
}