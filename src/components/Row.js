import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerID, setTrailerID] = useState("");
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playeerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerID) {
      setTrailerID("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search);
          setTrailerID(params.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          ></img>
        ))}
      </div>
      {trailerID && <YouTube videoId={trailerID} opts={opts} />}
    </div>
  );
}

export default Row;
