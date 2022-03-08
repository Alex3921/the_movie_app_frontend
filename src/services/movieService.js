class MovieService {
  constructor() {
    this.baseUrl = "https://the-movie-app-backend.herokuapp.com/api/v1/movies";
    this.searchUrl =
      "https://the-movie-app-backend.herokuapp.com/api/v1/movies/search/";
  }

  async fetchAll() {
    await fetch(this.baseUrl)
      .then((resp) => resp.json())
      .then((data) => Movie.renderMovies(data));
  }

  async search(query) {
    await fetch(this.searchUrl + query)
      .then((resp) => resp.json())
      .then((data) => Movie.renderMovies(data));
  }

  async getMovie(movie_id) {
    await fetch(this.baseUrl + "/" + movie_id)
      .then((resp) => resp.json())
      .then((data) => Movie.renderDetails(data));
  }
}
