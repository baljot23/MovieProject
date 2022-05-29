import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [genre, setGenre] = useState();

  useEffect(() => {
    fetch(`/movies/${pageNum}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data.results);
      });
  }, [pageNum]);

  useEffect(() => {
    fetch(`/genres/movies`)
      .then((res) => res.json())
      .then((data) => {
        setGenre(data);
      });
  }, []);

  return (
    <div>
      {movies?.map((movie) => {
        if (movie?.genre_ids?.includes(28)) {
          return (
            <div>
              {" "}
              <h1>Action</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        } else if (movie?.genre_ids?.includes(12)) {
          return (
            <div>
              <h1>Adventure</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        } else if (movie?.genre_ids?.includes(16)) {
          return (
            <div>
              <h1>Animation</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        } else if (movie?.genre_ids?.includes(35)) {
          return (
            <div>
              <h1>Comedy</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        } else if (movie?.genre_ids?.includes(80)) {
          return (
            <div>
              <h1>Crime</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        } else if (movie?.genre_ids?.includes(99)) {
          return (
            <div>
              <h1>Documentary</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        } else if (movie?.genre_ids?.includes(18)) {
          return (
            <div>
              <h1>Drama</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        } else if (movie?.genre_ids?.includes(10751)) {
          return (
            <div>
              <h1>Family</h1>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              />
            </div>
          );
        }
      })}

      <button
        onClick={() => {
          setPageNum(pageNum - 1);
        }}
        className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
      >
        Prev Page
      </button>
      <button
        onClick={() => {
          setPageNum(pageNum + 1);
        }}
        className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
      >
        Next Page
      </button>
    </div>
  );
};

export default Movies;
