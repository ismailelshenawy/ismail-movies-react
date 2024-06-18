import React, { useEffect, useState } from "react";
import { axios } from 'axios';

export default function SingelMovie() {
  //   const [wordSearch, setWordSearch] = useState("spider");
  const [singel, setSingel] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=spider"
      )
      .then((resp) => {
        console.log(resp);
        setSingel(resp);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  
  console.log(singel);

  return (
    <>
      <h2 className=" text-center">you searched : {wordSearch}</h2>;
      <div className=" container">
        <div className=" row">
                  {singel && <>
                      
              <div className="d-flix">
                        <div>
                            <img src="" alt="" />
                          </div>
                          <div>
                              <h3></h3>
                          </div>
              </div>
                  </>
            
            
            ))}
        </div>
      </div>
    </>
  );
}
