import React, { useContext } from "react";
import image from "../Image/1695484715612.jpeg"
import { MoviesContext } from "../MovieContext/MovieContext";

export default function Card() {
  const moviesList = useContext(MoviesContext)
  console.log(moviesList);
  
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
        style={({ width: "100px" }, { hight: "150px" })}
        alt="hello world"
      />
      <div className="card-body">
        <h5 className="card-title">Hello World</h5>
      </div>

    </div>
  );
}
