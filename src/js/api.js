import axios from 'axios';

export default class SearchNews {
  constructor() {
    this.searchQuery = '';
    this.category = '';
    this.dateFilter = '';
  }

  async searchNews() {
    const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    const API_KEY = '8n5KUMyFUl7iOAB9Zwf8IWBubkkgaMEq';
    const response = await axios.get(
      `${API_URL}?q=${this.searchQuery}&api-key=${API_KEY}`
    );

    return response;
  }

  async searchNewsWithDate() {
    const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    const API_KEY = '8n5KUMyFUl7iOAB9Zwf8IWBubkkgaMEq';
    const response = await axios.get(
      `${API_URL}?q=${this.searchQuery}&api-key=${API_KEY}&facet_fields=source&facet=true&begin_date=${this.dateFilter}&end_date=${this.dateFilter}`
    );

    return response;
  }

  async categoryList() {
    const API_URL =
      'https://api.nytimes.com/svc//news/v3/content/section-list.json';
    const API_KEY = '8n5KUMyFUl7iOAB9Zwf8IWBubkkgaMEq';
    const response = await axios.get(`${API_URL}?api-key=${API_KEY}`);

    return response;
  }

  async categoryNews() {
    const API_URL = 'https://api.nytimes.com/svc/news/v3/content/all/';
    const API_KEY = '8n5KUMyFUl7iOAB9Zwf8IWBubkkgaMEq';
    const response = await axios.get(
      `${API_URL}${this.category}.json?api-key=${API_KEY}`
    );

    return response;
  }

  async mostPopularNews() {
    const API_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json`;
    const API_KEY = '8n5KUMyFUl7iOAB9Zwf8IWBubkkgaMEq';
    const response = await axios.get(`${API_URL}?api-key=${API_KEY}`);

    return response;
  }
}
