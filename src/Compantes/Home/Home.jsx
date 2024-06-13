import React, { useContext } from "react";

import Card from "./Card";
import MoviesContextProvider from "../MovieContext/MovieContext";


export default function Home() {

  return (
    <>
      <div className="text-center">
        <h2>treading movies to watch now</h2>
        <h6>most watch movies by day</h6>
      </div>
      <MoviesContextProvider>
        <Card />
      </MoviesContextProvider>
    </>
  );
}
