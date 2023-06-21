import { IMovieDetails } from "../Movies/actions";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";



export const addToFavorites = ({id, title, description, poster}: IMovieDetails) => ({
  type: ADD_TO_FAVORITES,
  payload: {
    id, title, description, poster
  },
});

export const removeFromFavorites = (id: string) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id
});