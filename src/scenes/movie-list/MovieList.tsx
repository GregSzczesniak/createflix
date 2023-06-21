import React from "react";
import MovieListItem from "../../elements/components/movie-list-item/MovieListItem";
import { IMovieDetails } from "../../store/Movies/actions";

export interface IMovieList {
  list: IMovieDetails[];
}

export default function MovieList({ list }: IMovieList) {
  const movies = list?.map(movie => (
    <li key={movie.id}>
      <MovieListItem id={movie.id} description={movie.description} title={movie.title} poster={movie.poster} />
    </li>
  ));

  return <ul className={["movieList"].join(" ")}>
    {movies}
  </ul>;
}
