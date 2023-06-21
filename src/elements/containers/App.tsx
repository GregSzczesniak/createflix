import React from "react";
import { useSelector } from 'react-redux';
import { Switch, Route } from "wouter";
import "./App.css";
// @ts-ignore
import AppHeader from "../components/app-header/AppHeader";
import AppFooter from "../components/app-footer/AppFooter";
import MovieList from "../../scenes/movie-list/MovieList";
import useRequest from "../../customHooks/useRequest";
import Loader from "../components/loader/Loader";
import Main from "./Main";
import Instructions from "../../scenes/instructions/Instructions";
import Favorites from "../../scenes/favorites/Favorites";
import { IStore } from "../../store";
import { MOVIE_API } from "../../constants/Api";


function App() {
  useRequest(MOVIE_API);

  const { data, loading: isLoading, error: isError } = useSelector((state: IStore) => state.movies);

  return (
    <div className="app">
      <AppHeader />
      <Switch>
        <Route path="/favorites">
          <Main>
            <Favorites />
          </Main>
        </Route>
        <Route path="/instructions">
          <Instructions />
        </Route>
        <Route path="/movie-list">
          <Main>
            <>
              {isError && <p>Failed to fetch data</p>}
              {isLoading && <Loader />}
            </>
            {data && <MovieList list={data}/>}
          </Main>
        </Route>
        <Route>
          <Instructions />
        </Route>
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App;
