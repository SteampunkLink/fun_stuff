import React, { Fragment } from "react";

const Project = ({ project }) => {
  return (
    <Fragment>
      <a href={project.link}>
        <article className="project-card">
          <h2>{project.title}</h2>
          <img src={project.imageSrc} alt={project.imageAlt} />
          <h3>{project.description}</h3>
        </article>
      </a>
    </Fragment>
  );
};

export default Project;
