import React from "react";
import TravelApp from "./components/TravelApp";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import DetailPage from "./components/DetailPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<TravelApp />} />
        <Route path="/item/:id" element={<DetailPage />} />
      </Routes>
      <Card />
    </div>
  );
};

export default App;
