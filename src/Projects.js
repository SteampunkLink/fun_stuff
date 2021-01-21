import React, { Fragment, useState } from "react";
import Project from "./Project";
import projectData from "./projectData";

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  return (
    <Fragment>
      <header>
        <h1>Fun Stuff by SP Link</h1>
      </header>
      <main>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Projects;
