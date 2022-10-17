export class PixabayAPI {
  #page = 1;
  #query = '';
  #totalPages = 0;
  #perPage = 40;
  getImage() {
    const url = `https://pixabay.com/api/?key=30520048-83f00ec653ef23d160364c39b&q=${
      this.#query
    }&image_type=photo&orientation=horizontal&safesearch=true&page=${
      this.#page
    }&per_page=${this.#perPage}`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  get query() {
    return this.#query;
  }

  incrementPage() {
    this.#page += 1;
  }

  calculateTotalPages(totalHits) {
    this.#totalPages = Math.ceil(totalHits / this.#perPage);
  }

  reserPage() {
    this.#page = 1;
  }

  get isLoadMoreBtnShown() {
    return this.#page < this.#totalPages;
  }
}
