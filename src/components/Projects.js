import React, { useState } from "react";
import Project from "./Project";
import projectData from "../projectData";

const Projects = () => {
  const [projects] = useState(projectData);
  return (
    <div className="container">
      <header>
        <h1>Fun Stuff by SP Link</h1>
      </header>
      <main>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </main>
      <footer></footer>
    </div>
  );
};

export default Projects;
