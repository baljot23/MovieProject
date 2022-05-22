import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import TvShows from "./TvShows";
import Movies from "./Movies";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
