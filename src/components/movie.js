class Movie {
  static imgPath = "https://image.tmdb.org/t/p/w300";

  constructor({ id, title, overview, poster_path, vote_average, reviews }) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
    this.reviews = reviews;
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
      readMoreBtn.addEventListener("click", () => {
        movieService.getMovie(readMoreBtn.dataset.movie_id);
      });

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

  static renderDetails(m) {
    const movie = new this(m);

    const detailsModal = document.getElementById("details-modal");

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.innerText = "X";
    closeBtn.addEventListener("click", closeModal);

    const titleContainer = document.createElement("div");
    titleContainer.id = "title-container";

    const movieTitle = document.createElement("h3");
    movieTitle.id = "movie-title";
    movieTitle.innerText = movie.title;

    const movieRating = document.createElement("span");
    movieRating.id = "movie-rating";
    movieRating.innerText = movie.vote_average;
    movieRating.classList = movie.getClassByRate();

    titleContainer.appendChild(movieTitle);
    titleContainer.appendChild(movieRating);

    const movieOverview = document.createElement("div");
    movieOverview.id = "movie-overview";
    movieOverview.innerText = movie.overview;

    detailsModal.appendChild(closeBtn);
    detailsModal.appendChild(titleContainer);
    detailsModal.appendChild(movieOverview);

    const reviews = document.createElement("div");
    reviews.id = "reviews";

    if (movie.reviews.length > 0) {
      const reviewsTitle = document.createElement("h3");
      reviewsTitle.id = "reviews-title";
      reviewsTitle.innerText = "Reviews";
      reviews.appendChild(reviewsTitle);

      movie.reviews.forEach((reviewData) => {
        const review = new Review(reviewData);
        reviews.appendChild(review.renderReview());
      });
    }

    detailsModal.appendChild(reviews);
    detailsModal.classList.add("show");
    modalOverlay.classList.add("show");

    modalOverlay.addEventListener("click", closeModal);
  }

  getClassByRate() {
    const rating = this.vote_average;
    if (rating > 8) {
      return "green";
    } else if (rating >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
}
