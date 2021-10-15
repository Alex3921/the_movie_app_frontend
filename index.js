const movieService = new MovieService();
movieService.fetchAll();
const review = new Review();
const searchForm = document.getElementById("search-form");
let movieData;
let reviewerName;
let reviewRating;
let reviewContent;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const search = document.getElementById("search");
  const searchTerm = search.value;

  movieService.search(searchTerm);
});

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
const reviewForm = document.getElementById("review-form");

const openModal = () => {
  document.getElementById("review-name").focus();
  modalOverlay.classList.add("show");
  modal.classList.add("show");
  movieData = event.currentTarget.dataset;

  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", closeModal);
  reviewForm.addEventListener("submit", submitReview);
};

const submitReview = (e) => {
  e.preventDefault();

  reviewerName = document.getElementById("review-name");
  reviewRating = getStarRating();
  reviewContent = document.getElementById("review-content");

  console.log(reviewerName.value, reviewRating.value, reviewContent.value);

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
