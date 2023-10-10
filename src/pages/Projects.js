import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import Footer from "../components/Footer";

import "../styles/Projects.css";

function Projects() {
  return (
    <div>
      <div className="projects">
        <h1> My Homework Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
