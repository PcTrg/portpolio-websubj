import React from "react";
import { ProjectList } from "../helpers/ProjectList";

function ProjectItem({ image, name, id }) {
  const project = ProjectList[id];

  return (
    <div className="projectItem">
      <a
        className="linkline"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
      </a>
    </div>
  );
}

export default ProjectItem;
