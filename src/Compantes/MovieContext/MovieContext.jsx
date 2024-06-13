import { createContext, useEffect, useState } from "react";
import axios  from "axios";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  const [moviesList, setMoviesList] = useState("ismail elshwnay");
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        setMoviesList(resp.data);
        console.log(resp.data);
        // console.log(moviesList);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);


  return <MoviesContext.Provider value={moviesList}>
      {props.children}
    </MoviesContext.Provider>
  ;
};
export default MoviesContextProvider;
