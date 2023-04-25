import "./App.css";

function Projects() {
  return (
    <>
      <p className="projTitle">/PROJECTS</p>
      <div className="projectsDiv">
        <div className="projectCard">
          <img
            className="projectImage"
            src="/musofindImage.png"
            alt="musofindImage"
          ></img>
          MusoFind
          <a href="https://musofind.netlify.app/" target="_blank">
            <button className="projButton"> Open App</button>
          </a>
          <button className="descriptionButton">Description</button>
          <br />A four week group project where we had to solve a real world
          problem
        </div>{" "}
        <div className="projectCard">
          <img></img>
          Street Fighter II
          <br />A part remake of Street Fighter II i made out of interest of
          game development and the game itself.
        </div>{" "}
        <div className="projectCard">
          <img></img>
          MusoFind
          <br />A four week group project where we had to solve a real world
          problem
        </div>{" "}
        <div className="projectCard">
          <img></img>
          MusoFind
          <br />A four week group project where we had to solve a real world
          problem
        </div>
      </div>
    </>
  );
}
export default Projects;
