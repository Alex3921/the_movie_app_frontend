class TmdbApi {
  static imgPath = "https://image.tmdb.org/t/p/w1280";

  constructor() {
    this.service = new TmdbApiService();
    this.fetchAndRenderMovies();
  }

  fetchAndRenderMovies(query = '') {
    if (query.length === 0) {
      this.service.getMovies().then((movies) => {
        this.showMovies(movies.results);
      });
    } else {
      this.service.searchMovies(query).then((movies) => {
        this.showMovies(movies.results);
      });
    }
  }

  showMovies(movies) {
    // clear DOM
    const main = document.querySelector("main");
    main.innerHTML = "";

    movies.forEach((movie) => {
      const { poster_path, title, vote_average } = movie;

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `  
        <img
          src="${TmdbApi.imgPath + poster_path}" 
          alt="${title}"
        >
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${this.getClassByRate(vote_average)}">
              ${vote_average}
            </span>
        </div>
      `;
      main.appendChild(movieEl);
    });
  }

  getClassByRate(vote) {
    if (vote > 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
}
