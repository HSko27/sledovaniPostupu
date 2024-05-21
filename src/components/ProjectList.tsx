import React from 'react';
import { Link } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';
import '../styles.css';

const ProjectList = () => {
  const { projects } = useProject();

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-project">Create New Project</Link>
    </div>
  );
};

export default ProjectList;
