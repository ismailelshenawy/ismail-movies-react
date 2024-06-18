import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from './../Home/Card';

export default function Search() {
    const [wordSearch, setWordSearch] = useState("spider");
    const[searchList , setSearchList] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=ولاد"
      )
      .then((resp) => {
          console.log(resp.data.results);
          setSearchList(resp.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
    console.log(wordSearch);
    console.log(searchList);

  return (
    <>
      <h2 className=" text-center">you searched : {wordSearch}</h2>;
      <div className=" container">
        <div className=" row">
          {searchList &&
            searchList.map((search) => (
              <Card
                key={search.id}
                titel={search.title}
                image={search.poster_path}
              />
            ))}
        </div>
      </div>
    </>
  );
}
