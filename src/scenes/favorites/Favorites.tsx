import React from "react";
import { useSelector } from "react-redux";

import MovieListItem from "../../elements/components/movie-list-item/MovieListItem";
import { IStore } from "../../store";



export default function Favorites() {
  const { favorites } = useSelector((state: IStore) => state.favorites);
  const renderFavorites = favorites.length > 0 &&
    favorites.map((movie) => (
      <li key={movie.id}><MovieListItem selected={true} id={movie.id} description={movie.description} title={movie.title} poster={movie.poster} /></li>
    ));

  return <div className={["favorites"].join(" ")}>
    {favorites.length > 0 ? <ul>{renderFavorites}</ul> : <p>You don't have any favorite movies. Pick some to see it here!</p>}
  </div>;
}
