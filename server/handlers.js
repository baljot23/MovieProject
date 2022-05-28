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

//Most Popular Movies:

const getAllMovies = async (req, res) => {
  const data = req.params;

  console.log(data.pageNum);

  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c626dda80ad8ca9817006a0ef907444e&language=en-US&page=${
        data.pageNum ? data.pageNum : 1
      }`
    )
    .then((response) => {
      console.log(response);
      res.status(200).json({ status: 200, data: response.data });
    });
};

module.exports = {
  getAllMovies,
};
