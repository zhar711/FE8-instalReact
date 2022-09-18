import React from "react";
import "../../src/style/ListMovies.css";

const MovieCard = (title, image, rating, klik, fav) => {
  return (
    <div className="containerCard">
      <img className="image" src={image} alt="ini wahyu" />

      {/* <span className="editor">{this.props.editor}</span>
        <br />
        <span className="minutes">{this.props.minutes}</span>
        <br />
        <span className="genre">{this.props.genre}</span>
        <br /> */}
      <h3>{title}</h3>
      <h3>{rating}</h3>
      <button className="btn" type="button" onClick={fav}>
        add favorite
      </button>
      <button className="btn" type="button" onClick={klik}>
        detail movie
      </button>
    </div>
  );
};

export default MovieCard;
