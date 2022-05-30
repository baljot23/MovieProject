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
      <div>
        <h1>Action</h1>
        <div className="flex ">
          <button
            onClick={() => {
              setPageNum(pageNum - 1);
            }}
          >
            Previous
          </button>
          {movies?.map((movie) => {
            let featuredImages =
              "https://image.tmdb.org/t/p/w500" + movie?.poster_path;

            console.log(featuredImages);
            if (movie?.genre_ids?.includes(28)) {
              return (
                <div className="max-w-screen-xl m-auto">
                  <div className="w-full relative select-none">
                    <img src={featuredImages} />

                    <div className=" w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3"></div>
                  </div>
                </div>
              );
            }
          })}

          <button
            onClick={() => {
              setPageNum(pageNum + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div>
        <h1>Action</h1>
        <div className="flex ">
          <button
            onClick={() => {
              setPageNum(pageNum - 1);
            }}
          >
            Previous
          </button>
          {movies?.map((movie) => {
            let featuredImages =
              "https://image.tmdb.org/t/p/w500" + movie?.poster_path;

            console.log(featuredImages);
            if (movie?.genre_ids?.includes(28)) {
              return (
                <div className="max-w-screen-xl m-auto">
                  <div className="w-full relative select-none">
                    <img src={featuredImages} />

                    <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3"></div>
                  </div>
                </div>
              );
            }
          })}

          <button
            onClick={() => {
              setPageNum(pageNum + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
