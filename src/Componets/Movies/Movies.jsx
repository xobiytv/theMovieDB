import React, { useEffect, useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1"
    )
      .then((res) => {
        console.log(res.data);
        setMoviesData([...res.data.results]);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  }, []);

  return (
    <div>
      <h1>The movavi DB</h1>

      {moviesData.length > 0 ? (
        <div className="col-12 row justify-content-around ">
          {moviesData.map((arr, index) => {
            return (
              <Card key={index} style={{ width: "18rem" , margin: '20px'}}>
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500/" + arr.poster_path}
                />
                <Card.Body>
                  <Card.Title> {arr.original_title}</Card.Title>
                  <Card.Text>{arr.popularity}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
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
