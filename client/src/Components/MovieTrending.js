import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

const MovieTrending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const movie =
    trendingMovies[Math.floor(Math.random() * trendingMovies.length)];

  useEffect(() => {
    fetch(`/trending/movies`)
      .then((res) => res.json())
      .then((data) => {
        setTrendingMovies(data.data.results);
      });
  }, []);

  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover pt-5"
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        />
      </div>
    </div>
  );
};

export default MovieTrending;
