const movieService = new MovieService();
const reviewService = new ReviewService();
const searchForm = document.getElementById("search-form");

movieService.fetchAll();

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const search = document.getElementById("search");
  const searchTerm = search.value;

  movieService.search(searchTerm);
});

const reviewModal = document.getElementById("modal");
const detailsModal = document.getElementById("details-modal");
const modalOverlay = document.getElementById("modal-overlay");
const reviewForm = document.getElementById("review-form");

function openModal() {
  modalOverlay.classList.add("show");
  reviewModal.classList.add("show");
  document.getElementById("review-name").focus();

  modalOverlay.addEventListener("click", closeModal);
  reviewForm.addEventListener("submit", submitReview);
}

const submitReview = (e) => {
  e.preventDefault();

  authorName = document.getElementById("review-name");
  content = document.getElementById("review-content");
  starRating = getStarRating();
  movieID = e.currentTarget.dataset.movie_id;

  reviewService.createReview();

  closeModal();
};

const closeModal = () => {
  detailsModal.classList.remove("show");
  detailsModal.innerText = "";
  reviewForm.reset();
  reviewModal.classList.remove("show");
  modalOverlay.classList.remove("show");
};

const getStarRating = () => {
  const reviewRatingField = Array.from(
    document.querySelector(".rate").children
  );
  const selection = reviewRatingField.filter((e) => e.checked);
  return selection[0];
};

const closeBtn = document.getElementsByClassName("close-btn");
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", closeModal);
}
