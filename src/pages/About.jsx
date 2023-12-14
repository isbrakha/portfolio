import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function About() {

  const [about, setAbout] = useState([]);


  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => { getAboutData() } , []);

  const loaded = () => (
    <div className="content">
      <h2><strong>Isaac Brakha</strong></h2>
      <img id="headshot" src={about.headshot} />
      <p>A dedicated developer with a focus on crafting robust and scalable software. Driven by a passion for programming, I turn complex problems into intuitive applications.</p>
      <h3>Professional Skills:</h3>
      <ul>
        <li><strong>Python & Django:</strong>  I specialize in building robust systems using Python and Django, ensuring high performance and scalability.</li>
        <li><strong>JavaScript, Express, & React:</strong> Utilizing the power of JavaScript and its frameworks, I develop responsive and intuitive user interfaces, alongside efficient server-side applications with Express.js.</li>
        <li><strong>HTML & CSS:</strong> My foundation in web development is cemented with strong HTML and CSS skills, enabling me to produce clean, compliant, and visually compelling designs.</li>
      </ul>
      
      <p>I am committed to continuous learning and applying new technologies to deliver exceptional results. My approach is grounded in a balance of creativity and technical prowess, aimed at overcoming challenges and achieving excellence.</p>

        <span className="resume-container">
          <a href="public/Isaac Brakha CV (1).pdf">Download My Resume</a>
        </span>

    </div>

  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;