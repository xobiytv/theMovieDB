

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
        <footer class="single_column person header_medium">
        <nav>
          <div class="join">
            <img src={imageUrl + peopleData.profile_path} alt="" />
            {/* <a class="rounded logged_in" href="/u/diyor_n">
              Hi diyor_n!
            </a> */}
          </div>

          <div>
            <h3>The Basics</h3>
            <ul>
              <li>
                <a href="/about">About TMDB</a>
              </li>
              <li>
                <a href="/about/staying-in-touch">Contact Us</a>
              </li>
              <li>
                <a href="/talk">Support Forums</a>
              </li>
              <li>
                <a href="/documentation/api">API</a>
              </li>
              <li>
                <a
                  href="https://status.themoviedb.org/"
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
                <a href="/bible">
                  <span class="glyphicons glyphicons-asterisk"></span>{" "}
                  Contribution Bible
                </a>
              </li>
              <li>
                <a href="/movie/new">Add New Movie</a>
              </li>
              <li>
                <a href="/tv/new">Add New TV Show</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>
                <a href="/documentation/community/guidelines">Guidelines</a>
              </li>
              <li>
                <a href="/discuss">Discussions</a>
              </li>
              <li>
                <a href="/leaderboard">Leaderboard</a>
              </li>
              <li>
                <a
                  href="https://twitter.com/themoviedb"
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
                <a href="/documentation/website/terms-of-use">Terms of Use</a>
              </li>
              <li>
                <a href="/documentation/api/terms-of-use">API Terms of Use</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </nav>

        <section>Build 1f692a0 (5094)</section>
      </footer>
      ) : (
        <>Loding...</>
      )}
      
    </div>
  );
}
