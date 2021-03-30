import { writable, derived } from "svelte/store";

export const INITIAL_STATE = {
  movies: [],
  wasSearched: false,
};

export const store = writable({ ...INITIAL_STATE });

export const movies = derived(store, store => {
    return store.movies.filter(movies => movies.backdrop_path != null)
    .map((movie) => {
        movie.friendly_date = new Date(movie.release_date).toLocaleDateString();
        return movie;
    });
});