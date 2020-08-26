import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Movie from "./components/Movie";
import Search from "./components/Search";
// import './App.css';
// import { useState } from 'react';
// import { useEffect } from 'react';

const movie_URL ="http://www.omdbapi.com/?s=man&apikey=76157110"

const initState = {
  loading: true,
  movies:[],
  errorMessage:null
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(movie_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=76157110`)
      .then(response => response.json())
      .then(jsonResponse => {
        if(jsonResponse.Response === "True"){
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <Header text="Welcome to the Movies"/>
      <Search search={search} />
      <p className="App-intro"> Sharin' dem movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie}/>
          ))
        )}
      </div>
    </div>
  )
}

export default App;


//- Search OMDB and display the results(movies only)

//- Add a movie from the search results to our nomination list

//- View the list of films already nominated

//- Remove a nominee from the nomination list
