import React from "react";
import "./App.css";

import Footer from "./footer";

function Home() {
  return (
    <>
      <div className="home">
        <div className="topName">
          <h1 className="name">RYAN_SETHI</h1>
        </div>
        {/* <img className="head" src="/3dHead.png" alt="head"></img> */}
        <div className="welcomeLine">
          <h2>
            Well hello there, i see you have somehow stumbled onto my website...
            <br />
            <br />
            <span className="welcome">WELCOME!</span>
          </h2>
        </div>
        <div className="aboutMe">
          ABOUT_ME.md
          <br />
          <span className="aboutPara">
            Hi my name is Ryan Sethi, and I'm a front-end software developer who
            loves problem solving, thinking out of the box, and being creative.
          </span>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
