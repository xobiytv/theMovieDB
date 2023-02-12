
import React, { useEffect, useState } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import './peope.css'

export default function People() {
  const [peopleData, setPeopleData] = useState([]);
    let imageUrl = "https://image.tmdb.org/t/p/w500/"
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1"
      )
      .then((res) => {
        setPeopleData(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  }, []);
  return (
    <div>
      <h2>
        <span class="title">Popular People</span>
      </h2>
      {peopleData.length > 0 ? (
        <div className="row justify-content-center m-0">
          {peopleData.map((arr, index) => {
            return (
              <Link to={`/people/${arr.id}`} className="col-2 m-2">
                <div key={index}>
                  <div className="card ">
                    <img src={imageUrl + arr.profile_path} alt="" />
                    <div className="m-1">
                      <h4>{arr.name}</h4>
                      <i>{arr.known_for_department}</i>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <>
          <h1>Loding</h1>
        </>
      )}
    </div>
  );
}
