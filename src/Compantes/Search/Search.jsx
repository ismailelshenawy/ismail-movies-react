import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "./../Home/Card";
import { MoviesContext } from "../MovieContext/MovieContext";

export default function Search() {
  const { searchWordMovies } = useContext(MoviesContext);
  const [searchList, setSearchList] = useState([]);
  const [allsearch, setAllsearch] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${searchWordMovies}`
      )
      .then((resp) => {
        console.log("from Movies", resp.data.results);
        setSearchList(resp.data.results);
      })
      .catch((err) => {
        alert(err);
      });
    // ---------------------------------

    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${searchWordMovies}`
      )
      .then((resp) => {
        console.log("from personal", resp.data.results);
        setAllsearch(resp.data.results);
      })
      .catch((err) => {
        alert(err);
      });
    ///////////////
  }, [searchWordMovies]);

  console.log(searchList);

  return (
    <>
      <h2 className=" text-center">you searched : {searchWordMovies}</h2>;
      <div className=" container">
        <div className=" row">
          <h2 className=" text-center">movies</h2>
          {searchList &&
            searchList.map((search) => (
              <Card
                key={search.id}
                titel={search.title}
                image={search.poster_path}
                id={search.id}
              />
            ))}
          {/* /////////////// */}
          <h1 className=" text-center">Tv show</h1>
          {allsearch &&
            allsearch.map((search) => (
              <Card
                key={search.id}
                titel={search.title}
                image={search.poster_path}
                id={search.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
