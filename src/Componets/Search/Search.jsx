import axios from "axios";
import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Footer from "./Componets/Navbar/Footer";
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
      <div className="container my-3 d-flex">
        <input
          onInput={(item) => {
            SetSearchValue(item.target.value);
          }}
          className="form-control"
          type="text"
        />
        <button
          onClick={() => {
            searchFunction();
          }}
        >
          Qidirosh
        </button>
      </div>
    </div>
  );
}
