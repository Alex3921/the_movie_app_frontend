class MovieService {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/movies";
    this.searchUrl = "http://localhost:3000/api/v1/movies/search/";
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

  // createMovie(movieData) {
  //   const { title, overview, vote_average, poster_path, id } = movieData;

  //   const movieInfo = {
  //     movie: {
  //       title: title,
  //       overview: overview,
  //       vote_average: vote_average,
  //       poster_path: poster_path,
  //       external_id: id,
  //       reviews_attributes:
  //         {
  //           author_name: reviewerName.value,
  //           content: reviewContent.value,
  //           stars: reviewRating.value
  //         }
  //     },
  //   };

  //   const configObject = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(movieInfo),
  //   };

  //   fetch(this.baseUrl, configObject)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }
}
