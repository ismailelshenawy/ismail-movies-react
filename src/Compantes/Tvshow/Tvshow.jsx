import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Home/Card";

export default function Tvshow() {
  const [tvShow, setTvShow] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=4637e1d1d716e6b8dcd5473b0fc711b6"
      )
      .then((resp) => {
        setTvShow(resp.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <>
      <div className="text-center">
        <h2>treading movies to watch now</h2>
        <h6>most watch movies by day</h6>
      </div>
      <div className=" container">
        <div className=" row">
          {tvShow &&
            tvShow.map((film) => (
              <Card
                key={film.id}
                titel={film.original_name}
                image={film.poster_path}
                id={film.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
