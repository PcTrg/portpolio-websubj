import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <p>
        <b>Or you can visit </b>
        <a
          className="linkline"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
    </div>
  );
}

export default ProjectDisplay;
