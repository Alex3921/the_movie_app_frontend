class TmdbApi {
  static imgPath = 'https://image.tmdb.org/t/p/w1280'

  constructor() {
    this.service = new TmdbApiService()
    this.fetchAndRenderMovies()
  }

  fetchAndRenderMovies() {
    this.service
      .getMovies()
      .then(movies => {
        this.render(movies.results)
      })
  }

  render(movies) {
    movies.forEach((movie) => {
      const img = document.createElement('img')
      img.src = TmdbApi.imgPath + movie.poster_path

      document.body.appendChild(img)
    })
     
  }
}