import React from "react";
import "../App.css";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import data from "../data";

const MovieTrailer = () => {
  const params = useParams();
  const { slug } = params;

  const movie = data.movies.find((movieOne) => {
    return movieOne.slug === slug;
  });

  return (
    <div className="movie_trailer_container">
      <ReactPlayer className="react_player_trailer" url={movie.trailer} />
    </div>
  );
};

export default MovieTrailer;
