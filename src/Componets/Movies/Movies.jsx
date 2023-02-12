
import React, { useEffect, useState } from 'react'
import  Axios from "axios";


export default function Movies() {

  const [moviesData, setMoviesData]= useState([])
  useEffect(() => {
    Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1"
)
    .then(res=> {
      console.log(res.data)
      setMoviesData([...res.data.results])
    })
    .catch(error => {
        console.log(error.massage);
      })
  },  [])

  return (
    <div>
      <h1>The movavi DB</h1>
      
      {(moviesData.length > 0)?    
          <>
        {moviesData.map((arr, index) => {
            return (
              <div key={index}>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + arr.poster_path}
                  alt=""
                />
                <h2> {arr.original_title}</h2>
              </div>
            );
          })
        }
       </>
       :
       <>
       <h1>Loding</h1>
       </>
}
    </div>
  );
}