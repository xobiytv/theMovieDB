

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import '../Movies/signpeople.css'


export default function Footer() {
   const [peopleData, setPeopleData] = useState([]);
   let imageUrl = "https://image.tmdb.org/t/p/w500/";
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
      {peopleData ? (
        <footer className="single_column person header_medium">
          <nav>
            <div className="join flex-column justify-content-center align-items-center col-3">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="logo"
                width={150}
              />
              <a className=" pad mt-5" href="/u/diyor_n ">
                Join the Community
              </a>
            </div>

            <div>
              <h3>The Basics</h3>
              <ul>
                <li>
                  
                  <a href="">About TMDB</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Support Forums</a>
                </li>
                <li>
                  <a href="">API</a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    System Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Get Involved</h3>
              <ul>
                <li>
                  <a href="">
                    <span className="glyphicons glyphicons-asterisk"></span>{" "}
                    Contribution Bible
                  </a>
                </li>
                <li>
                  <a href="">Add New Movie</a>
                </li>
                <li>
                  <a href="">Add New TV Show</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="">Guidelines</a>
                </li>
                <li>
                  <a href="">Discussions</a>
                </li>
                <li>
                  <a href="">Leaderboard</a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">API Terms of Use</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </nav>

        </footer>
      ) : (
        <>Loding...</>
      )}
    </div>
  );
}
