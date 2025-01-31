import React, { useEffect, useState } from "react";
import axios from "axios";
import { Moviecard } from "../MovieCard/MovieCard";
import "./featuredmovies.css";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=53115709979b7219fb753e656e856fb2&language=en-US&page=1"
      );
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="App">
      <main className="featured">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)}
      </main>
    </div>
  );
};

export default FeaturedMovies;
