import React, { useContext } from "react";

import { MoviesContext, imagePath } from "../MovieContext/MovieContext";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card m-auto " style={{ width: "18rem" }}>
      <img loading="leazy"
        src={imagePath + props.image}
        className="card-img-top"
        style={({ width: "100px" }, { hight: "150px" })}
        alt={props.titel}
      />
      <div className="card-body">
        <h5 className="card-title">
          <Link to={""+props.id}>{props.titel}</Link>
        </h5>
      </div>
    </div>
  );
}
