// https://api.themoviedb.org/3/search/movie?api_key=a1279933de606b4374a2c93a1d0127a9&query=pulp

import { API_KEY, http } from "./http";
import { INITIAL_STATE, store } from "../store";

export const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

export const fetchMovies = async (term) => {
  const {
    data: { results: movies },
  } = await http.get(`movie?api_key=${API_KEY}&query=${term}`);

  store.set({
    ...INITIAL_STATE,
    movies,
    wasSearched: true,
  });
};

export const resetMovies = () => {
  store.set({
    ...INITIAL_STATE,
  });
};
