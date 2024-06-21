import React, { useContext } from "react";
import { MoviesContext } from "../MovieContext/MovieContext";
import Card from "./Card";
import MoviesContextProvider from "../MovieContext/MovieContext";

export default function Home() {
  const {moviesList} = useContext(MoviesContext);

  return (
    <>
      <div className="text-center">
        <h2>treading movies to watch now</h2>
        <h6>most watch movies by day</h6>
      </div>
      <div className=" container">
        <div className=" row">
          {moviesList &&
            moviesList.map((film) => (
              <Card
                key={film.id}
                titel={film.original_title}
                image={film.poster_path}
                id={film.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
