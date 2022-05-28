import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetch(`/movies/${pageNum}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data.results);
      });
  }, [pageNum]);

  return (
    <div>
      <div>
        {movies?.map((movie) => {
          return (
            <div className="w-20 h-40 border-2 border-white">
              <img
                className="object-cover"
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setPageNum(pageNum + 1);
        }}
      ></button>
    </div>
  );
};

export default Movies;
