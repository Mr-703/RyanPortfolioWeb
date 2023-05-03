import React from "react";
import "./App.css";
import Home from "./Home";
import Projects from "./projects";
import Footer from "./footer";
import Contact from "./contact";

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
