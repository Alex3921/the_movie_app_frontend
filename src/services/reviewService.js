class ReviewService {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/reviews";
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

    fetch(this.baseUrl, configObject)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
