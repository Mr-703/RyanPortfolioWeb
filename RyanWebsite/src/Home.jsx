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
            Hi my name is Ryan Sethi, and I'm a front-end developer who loves
            problem solving, thinking out of the box, and being creative.
          </span>
        </div>
        <div>
          /TOOLS_&&_LANGUAGES
          <br />
          <div className="toolDiv">
            <button className="toolButtons">JavaScript</button>
            <button className="toolButtons">HTML</button>
            <button className="toolButtons">CSS</button>
            <button className="toolButtons">Git</button>
            <button className="toolButtons">React</button>
            <button className="toolButtons">Figma</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
