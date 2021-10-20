class Review {
  constructor({ id, author_name, content, stars, created_at }) {
    this.id = id;
    this.author_name = author_name;
    this.content = content;
    this.stars = stars;
    this.created_at = created_at;
  }

  renderReview() {
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review-container";

    reviewContainer.innerHTML = `
            <div class="review-title">
                <h4>${this.author_name}</h4>
                <span class="review-stars">${this.addStars()}</span>
            </div>
            <div class="review-content">
                ${this.content}
            </div>
            </div>
        `;

    const reviewFooter = document.createElement("div");
    reviewFooter.className = "review-footer";

    const reviewDate = document.createElement("h5");
    reviewDate.innerText = this.formatDate();
    reviewFooter.appendChild(reviewDate);

    const deleteBtn = document.createElement("i");
    deleteBtn.dataset.id = this.id;
    deleteBtn.className = "fas fa-trash";
    reviewFooter.appendChild(deleteBtn);

    reviewContainer.appendChild(reviewFooter);

    deleteBtn.addEventListener("click", (e) => {
      e.currentTarget.parentElement.parentElement.remove();
      const review_id = e.currentTarget.dataset.id;
      reviewService.deleteReview(review_id);
    });

    return reviewContainer;
  }

  addStars() {
    let stars = "";
    for (let i = 0; i < this.stars; i++) {
      stars += "★";
    }
    return stars;
  }

  formatDate() {
    const date = new Date(this.created_at);
    const options = { year: "numeric", month: "long", day: "numeric" };

    return date.toLocaleDateString("en-US", options);
  }
}
