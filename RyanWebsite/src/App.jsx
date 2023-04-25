import React from "react";
import "./App.css";
import Navbar from "./navbar";

import Footer from "./footer";

import { Route, Link, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default App;
