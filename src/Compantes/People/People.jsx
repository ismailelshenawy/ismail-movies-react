import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Home/Card';

export default function People() {
  const [tvPeople, setTvPeople] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/person/day?api_key=4637e1d1d716e6b8dcd5473b0fc711b6"
      )
      .then((resp) => {
        setTvPeople(resp.data.results);
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
          {tvPeople &&
            tvPeople.map((film) => (
              <Card
                key={film.id}
                titel={film.name}
                image={film.profile_path}
                id={film.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
