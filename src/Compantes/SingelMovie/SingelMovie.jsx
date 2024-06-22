import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../../src/image/210210_97c20247b0.jpg";
const imagePath = "https://image.tmdb.org/t/p/w500/";
export default function SingelMovie() {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4637e1d1d716e6b8dcd5473b0fc711b6`
      )
      .then((res) => {
        setFilm(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <>
      <div className=" container mt-3 vh-100">
        <div className="row ">
          <div className="col-5">
            <img className="w-100" src={imagePath + film.poster_path} alt="" />
          </div>
          <div className=" col-7 align-content-center">
            <h2>{film.title}</h2>
            <h4>{film.tagline}</h4>
            {film.genres &&
              film.genres.map((manyList) => (
                <button className="but m-2 btn-color">{manyList.name}</button>
              ))}
            <h4>Vote:{film.vote_average}</h4>
            <h4>Vote count:{film.vote_count}</h4>
            <h4>Released date:{film.release_date}</h4>
            <p>{film.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
