import axios from "axios";
import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Footer from "./Componets/Navbar/Footer";
import "./search.css";
export default function Search() {
  // let imageUrl = "https://image.tmdb.org/t/p/w500/";
  const [searchValue, SetSearchValue] = useState({});
  function searchFunction() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&query=${searchValue}&page=1&include_adult=false`
      )
      .then((res) => {
        //  SetSearchValue(res.data.results);
        console.log(res.data.results);
      });
  }
  return (
    <div>
      

      <section class="inner_content new_index">
        <div id="media_v4" class="media discover">
          <div class="column_wrapper">
            <div class=" col-12">
              <div class="title col-12">
                <h2>Welcome.</h2>
                <h3>
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </h3>
              </div>

              <div class="search col-12">
                <form id="inner_search_form">
                  <label>
                    {/* <input dir="auto" id="inner_search_v4" name="query" type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person......" value=""></input> */}
                    <input
                      onInput={(item) => {
                        SetSearchValue(item.target.value);
                      }}
                      
                      type="text"
                      placeholder="Search for a movie, tv show, person......"
                    />
                  </label>
                  <button
                    onClick={() => {
                      searchFunction();
                    }}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
