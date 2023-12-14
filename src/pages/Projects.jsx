import { useState, useEffect } from "react";

function Projects() {

  const [projects, setProjects] = useState(null);


  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();

    setProjects(data);

  };

  useEffect(() => {getProjectsData()}, []);

  const loaded = () => {
    return projects.map((project, idx) => (
      <div key={idx}>
        <h1>{project.name}</h1>
        <div id="project-wrapper">
          <img id="app-images" src={project.image} />
          <p>{project.desc}</p>
        </div>
        <a href={project.git}>
          <button className="project-btns">Github Repo</button>
        </a>
        <a href={project.live}>
          <button className="project-btns">Live Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
