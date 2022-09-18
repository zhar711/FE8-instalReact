import React from "react";
import Navbar from "../components/Navbar";
import { withRouter } from "../withRouter";

const DetailMovie = (props) => {
  return (
    <>
      <Navbar />
      <div className="mapes2">
        <div>
          <p>{props.location.state.title}</p>
          <img
            src={
              props.location.state.image
                ? "https://image.tmdb.org/t/p/original/" +
                  props.location.state.image
                : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"
            }
            alt="wahyu why"
          />
          <p>{props.location.state.popularity}</p>
          <p>{props.location.state.overview}</p>
          <p>{props.location.state.vote_count}</p>
          <p>{props.location.state.vote_average}</p>
          <p>{props.location.state.release_date}</p>
        </div>
      </div>
    </>
  );
};
export default withRouter(DetailMovie);
