// pages/index.js
import React from "react";
import { useSelector } from "react-redux";
import Map from "../components/Map";
import SearchHistory from "../components/SearchHistory";

const Home = () => {
  return (
    <div>
      <Map />
      <SearchHistory />
    </div>
  );
};

export default Home;
