import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Icon } from "@iconify/react";

import "../App.css";

const MovieCard = (props) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={props.img} alt={props.title} />
      </div>

      <h5 className="card_title">{props.title}</h5>
      <p className="card_genre">{props.genre}</p>
      <Button className="card_button">
        <Icon icon="mdi:magnify-plus-outline" /> <span>View Movie</span>
      </Button>
    </div>
  );
};

export default MovieCard;
