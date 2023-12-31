import axios from 'axios';

export default class ImgApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.viewedHits = 0;
    this.totalHits = 0;
  }

  async fetchImages() {
    const KEY = '41214696-b8d5e81a3014509351e7b9ca6';
    const response = await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
    );

    this.incrementPage();
    this.hitsCounter(response);
    this.totalHits = response.data.totalHits;

    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  hitsCounter(response) {
    this.viewedHits += response.data.hits.length;
  }

  resethitsCounter() {
    this.viewedHits = 0;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
