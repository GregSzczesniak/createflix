import { Reducer } from 'redux';
import { IMovieDetails } from '../Movies/actions';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actions';

export interface IFavoritesDefaultState {
  favorites: IMovieDetails[];
};

const initialState: IFavoritesDefaultState = {
  favorites: []
};

const reducer: Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:

      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }

    case REMOVE_FROM_FAVORITES:

      return {
        ...state,
        favorites: state.favorites.filter((movie: IMovieDetails) => movie.id !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;