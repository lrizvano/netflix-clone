const API_KEY = "96a9b1aebe7cb998440db59f3436d34a";

const requests = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&page=1`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US&page=1`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US&page=1`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US&page=1`,
};

export default requests;
