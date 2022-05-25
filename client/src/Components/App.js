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
import MyList from "./MyList";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Container>
          <Routes>
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/TvShows" element={<TvShows />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/MyList" element={<MyList />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

const Container = styled.div`
  height: 1000px;
  background: linear-gradient(to bottom, #0000cc 14%, #9999ff 118%);
`;
export default App;
