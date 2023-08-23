import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projectItems = projects.map((projectObj) => {
    return <ProjectItem 
              key={projectObj.id} 
              name={projectObj.name} 
              about={projectObj.about} 
              technologies={projectObj.technologies}
            />
  })

  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
