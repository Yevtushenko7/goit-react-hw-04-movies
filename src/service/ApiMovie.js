import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const ApiKey = '7cf3515e7b8cb22662952ee48c71fac5';

const ApiMovie = {
  getTrendMovies() {
    return axios
      .get(`trending/movie/week?api_key=${ApiKey}`)
      .then(res => res.data.results);
  },
  getByQueryMovies(query) {
    return axios
      .get(`search/movie?api_key=${ApiKey}&query=${query}`)
      .then(res => res.data.results);
  },
  getMovieById(id, option = '', page = '') {
    return axios.get(`movie/${id}${option}?api_key=${ApiKey}${page}`);
  },
};

export default ApiMovie;