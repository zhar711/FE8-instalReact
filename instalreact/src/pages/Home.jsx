import Navbar from "../components/Navbar";
import MovieCard from "../components/MoviesCard";
import { withRouter } from "../withRouter";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFavContext } from "../context/FavoritesProvider";

const BASEIMAGE = "https://image.tmdb.org/t/p/original";
const Home = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState([]);
  const [pages, setPages] = useState(1);
  const { handleFav } = useFavContext;

  useEffect(() => {
    getData();
  }, [pages]);

  const getData = async (pages) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=6abe3c5cae209af53dc03ebaee318a77&language=en-US&page=${pages}`
      )
      .then((response) => {
        setTitle(response.data.results);
      })

      .catch((error) => {
        alert(error);
      });
  };

  const handleDetailPage = (item) => {
    navigate(`/detail/${item.id}`, {
      state: {
        title: item.title,
        image: item.poster_path,
        popularity: item.popularity,
        lang: item.original_language,
        overview: item.overview,
        vote_count: item.vote_count,
        vote_average: item.vote_average,
        release_date: item.release_date,
      },
    });
  };
  const favourites = () => {
    navigate("/favourite");
  };

  const previousPage = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
    getData(pages);
  };

  const nextPage = () => {
    setPages(pages + 1);
    getData(pages);
  };

  return (
    <>
      <Navbar favourites={() => favourites()} />
      <div className="mapes">
        {title.map((item, index) => {
          return (
            <div key={index}>
              <MovieCard
                klik={() => handleDetailPage(item)}
                title={item.title}
                image={BASEIMAGE + item.poster_path}
                popularity={item.popularity}
                overview={item.overview}
                count={item.count}
              />
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button onClick={(value) => previousPage(value)}>Previous</button>
        <button onClick={(value) => nextPage(value)}>Next</button>
      </div>
    </>
  );
};

export default withRouter(Home);
