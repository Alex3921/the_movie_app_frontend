class Movie {
  static imgPath = "https://image.tmdb.org/t/p/w300";

  constructor({ id, title, overview, poster_path, vote_average, external_id }) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
  }

  static renderMovies(collection) {
    const main = document.getElementById("main");
    main.innerHTML = "";

    collection.forEach((m) => {
      const movie = new this(m);

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie-card");

      const movieImg = document.createElement("img");
      movieImg.src = `${Movie.imgPath + movie.poster_path}`;
      movieImg.alt = `${movie.title}`;
      movieImg.title = `${movie.title}`;

      const movieOptions = document.createElement("div");
      movieOptions.className = "options";

      const readMoreBtn = document.createElement("button");
      readMoreBtn.type = "button";
      readMoreBtn.innerText = "Read more";
      readMoreBtn.dataset.movie_id = `${movie.id}`;
      readMoreBtn.addEventListener("click", openMovieDetails);

      const leaveReviewBtn = document.createElement("button");
      leaveReviewBtn.type = "button";
      leaveReviewBtn.innerText = "Leave review";
      leaveReviewBtn.dataset.movie_id = `${movie.id}`;
      leaveReviewBtn.addEventListener("click", () => {
        const reviewForm = document.getElementById("review-form");
        reviewForm.dataset.movie_id = leaveReviewBtn.dataset.movie_id;
        openModal();
      });

      movieOptions.appendChild(readMoreBtn);
      movieOptions.appendChild(leaveReviewBtn);

      movieEl.appendChild(movieImg);
      movieEl.appendChild(movieOptions);

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
