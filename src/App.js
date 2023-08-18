import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import SearchResultPage from "./pages/searchResultPage/SearchResultPage";

// import "./App.css";
import { fetchAPI } from "./utils/fetchAPI";
import Navbar from "./components/header/Navbar";
import MovieListingCard from "./components/movieListingCard/MovieListingCard";
import MovieDetailsPage from "./pages/movieDetails/MovieDetailsPage";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchAPI("/configuration");

      const url = {
        backdrop: res.images.secure_base_url + 'original', //"w300",
      };
      dispatch(getApiConfiguration(url));
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieListingCard />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
      </Routes>
    </div>
  );
};

export default App;