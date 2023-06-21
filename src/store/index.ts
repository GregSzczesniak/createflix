import { configureStore } from '@reduxjs/toolkit';
import moviesReducer, { IMovieDefaultState } from './Movies/reducers';
import favoritesReducer, { IFavoritesDefaultState } from './Favorites/reducers';

export interface IStore {
  movies: IMovieDefaultState;
  favorites: IFavoritesDefaultState;
}

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer
  }
})

export default store;