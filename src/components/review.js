class Review {
    constructor(reviewer, rating, content, movie_id) {
        this.service = new ReviewService();
        this.reviewer = reviewer;
        this.rating = rating;
        this.content = content;
        this.movie_id = movie_id;
    }
    
}