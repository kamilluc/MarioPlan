import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  // && -> jak nie ma projektow nie rob map
  const data =
    projects &&
    projects.map(project => {
      return (
        <Link to={`/project/${project.id}`}>
          <ProjectSummary project={project} key={project.id} />
        </Link>
      );
    });

  return (
    <div className="project-list section">
      {data}
      {/* <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary /> */}
    </div>
  );
};

export default ProjectList;
