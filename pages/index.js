// pages/index.js
import React from "react";
import { useSelector } from "react-redux";
import Map from "../components/Map";
import SearchHistory from "../components/SearchHistory";

const Home = () => {
  return (
    <div>
      <h1>Google Place Autocomplete</h1>
      <Map />
      <SearchHistory />
    </div>
  );
};

export default Home;
