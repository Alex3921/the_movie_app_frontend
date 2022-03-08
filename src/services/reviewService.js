class ReviewService {
  constructor() {
    this.baseUrl = "https://the-movie-app-backend.herokuapp.com/api/v1/reviews";
  }

  createReview() {
    const reviewData = {
      review: {
        author_name: authorName.value,
        content: content.value,
        stars: starRating.value,
        movie_id: movieID,
      },
    };

    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(reviewData),
    };

    fetch(this.baseUrl, configObject);
  }

  deleteReview(id) {
    fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
  }
}
