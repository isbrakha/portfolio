import { useState, useEffect } from "react";



function Portfolio() {

  const [about, setAbout] = useState([]);
  const [projects, setProjects] = useState(null);


  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();

    setProjects(data);

  };


  const renderAbout = () => {
    return (
      <div className="content">
      <img id="headshot" src={about.headshot} />
      <p>A dedicated developer with a focus on crafting robust and scalable software. Driven by a passion for programming, I turn complex problems into intuitive applications.</p>
      <h3>Professional Skills:</h3>
      <ul>
        <li><strong>Python & Django:</strong>  I specialize in building robust systems using Python and Django, ensuring high performance and scalability.</li>
        <li><strong>JavaScript, Express, & React:</strong> Utilizing the power of JavaScript and its frameworks, I develop responsive and intuitive user interfaces, alongside efficient server-side applications with Express.js.</li>
        <li><strong>HTML & CSS:</strong> My foundation in web development is cemented with strong HTML and CSS skills, enabling me to produce clean, compliant, and visually compelling designs.</li>
      </ul>
      
      <p>I am committed to continuous learning and applying new technologies to deliver exceptional results. My approach is grounded in a balance of creativity and technical prowess, aimed at overcoming challenges and achieving excellence.</p>
    </div>
    )
  }

  const renderProjects = () => {
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


  useEffect(() => { getAboutData(); getProjectsData() } , []);

  const loaded = () => {
    return(
      <>
        <h1 id="about" className="title">Isaac Brakha</h1>
        <section>{renderAbout()}</section>
        <br/>
        <h1 id="projects" className="title">My Projects</h1>
        <section>{renderProjects()}</section>
        <h1 id="contact" className="title">Contact Me</h1>
        <h1 id="email">E-mail: <a href="mailto:isaacbrakha14@gmail.com">isaacbrakha14@gmail.com</a></h1>
        <h1 className="resume-container">
        <a href="public/Isaac Brakha CV (1).pdf">Download My Resume</a>
        </h1>
      </>
    )

  };
  return about && projects  ? loaded() : <h1>Loading...</h1>;
}

export default Portfolio;