const API_KEY = '8affd7e9aa1bbcaf696efe27fede3ce1';

const language = 'en-US';
const BASE_URL = `https://api.themoviedb.org/3/`;
const query = `?api_key=${API_KEY}&language=${language}`

const apiSettings = {
  // For Images
  IMAGE_BASE_URL: `https://image.tmdb.org/t/p/original`,

  baseUrl: BASE_URL,
  urlQuery: query,
  // For Movie Endpoints
  POPULAR_MOVIES: `${BASE_URL}movie/popular${query}`,
  POPULAR_TV: `${BASE_URL}tv/popular${query}`,
  TRENDING_MOVIES: `${BASE_URL}trending/movie/week${query}`,
  TRENDING_TV: `${BASE_URL}trending/tv/week${query}`,
  TOP_RATED_MOVIES: `${BASE_URL}movie/top_rated${query}`,
  TOP_RATED_TV: `${BASE_URL}tv/top_rated${query}`,
  MOVIE_LIST: `${BASE_URL}genre/movie/list${query}`,
  TV_LIST: `${BASE_URL}genre/tv/list${query}`,
  DISOVER_MOVIES_GENRES: `${BASE_URL}discover/movie`,
  DISOVER_TV_GENRES: `${BASE_URL}discover/tv`,

  COLLECTION_IMAGE: `${BASE_URL}collection/`,
  UPCOMING_MOVIES: `${BASE_URL}movie/upcoming${query}`,
  AIRING_TODAY_TV: `${BASE_URL}tv/airing_today${query}`,

  // For Search Endpoints
  SEARCH_MULTI: `${BASE_URL}search/multi?api_key=${API_KEY}&language=${language}`,
}

export default apiSettings;