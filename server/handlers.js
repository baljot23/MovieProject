const { default: axios } = require("axios");
const { response } = require("express");

("use strict");
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Trending:
const getTrending = async (req, res) => {
  const data = req.params;

  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=c626dda80ad8ca9817006a0ef907444e`
    )
    .then((response) => {
      console.log(response);
      res.status(200).json({ status: 200, data: response.data });
    });
};

//Most Popular Movies:

const getAllMovies = async (req, res) => {
  const data = req.params;

  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c626dda80ad8ca9817006a0ef907444e&language=en-US&page=${
        data.pageNum ? data.pageNum : 1
      }`
    )
    .then((response) => {
      res.status(200).json({ status: 200, data: response.data });
    });
};

// Movie Genres

const getMovieGenres = async (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=c626dda80ad8ca9817006a0ef907444e&language=en-US`
    )
    .then((response) => {
      res.status(200).json({ status: 200, data: response.data });
    });
};

module.exports = {
  getAllMovies,
  getMovieGenres,
  getTrending,
};
