import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getQueriesForElement } from "@testing-library/react";

export const MoviesContext = createContext();
export const imagePath = "https://image.tmdb.org/t/p/w500/";


const MoviesContextProvider = (props) => {
  const [searchWordMovies, setSearchWordMovies] = useState("");

  const [moviesList, setMoviesList] = useState([]);
  const [searchMoviesList, setSearchMoviesList] = useState([]);
  function getWord(word) {
    setSearchWordMovies(word);
  }
 
 

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4637e1d1d716e6b8dcd5473b0fc711b6"
      )
      .then((resp) => {
        setMoviesList(resp.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <MoviesContext.Provider value={{ moviesList, searchWordMovies, getWord }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;
