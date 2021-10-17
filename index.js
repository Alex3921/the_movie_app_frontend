const movieService = new MovieService();
const reviewService = new ReviewService();
movieService.fetchAll();
const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const search = document.getElementById("search");
  const searchTerm = search.value;

  movieService.search(searchTerm);
});

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
const reviewForm = document.getElementById("review-form");

function openModal() {
  modalOverlay.classList.add("show");
  modal.classList.add("show");
  document.getElementById("review-name").focus();

  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", closeModal);
  reviewForm.addEventListener("submit", submitReview);
}

const submitReview = (e) => {
  e.preventDefault();

  authorName = document.getElementById("review-name");
  content = document.getElementById("review-content");
  starRating = getStarRating();
  movieID = e.currentTarget.dataset.movie_id;

  reviewService.createReview()

  closeModal();
};

const closeModal = () => {
  reviewForm.reset();
  modal.classList.remove("show");
  modalOverlay.classList.remove("show");
};

const getStarRating = () => {
  const reviewRatingField = Array.from(
    document.querySelector(".rate").children
  );
  const selection = reviewRatingField.filter((e) => e.checked);
  return selection[0];
};

function openMovieDetails() {
  debugger
}