class Movie {
    static imgPath = "https://image.tmdb.org/t/p/w1280";
  
    constructor() {
      this.service = new MovieService();
      this.fetchAndRenderMovies();
    }
  
    fetchAndRenderMovies(query = "") {
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
      const main = document.getElementById("main");
      main.innerHTML = "";
  
      movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;
  
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie-card");
  
        movieEl.innerHTML = `  
          <img
            src="${Movie.imgPath + poster_path}" 
            alt="${title}"
          >
          <div class="options">
          <button type="button" id="read-more">Read more</button>
          <button type="button" id="leave-review">Leave review</button>
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
  