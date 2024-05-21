import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';
import KanbanBoard from './KanbanBoard';
import '../styles.css';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { projects } = useProject();

  if (!projectId) {
    return <div>Invalid project ID</div>;
  }

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <KanbanBoard projectId={projectId} />
      <Link to={`/project/${projectId}/create-task`}>Add Task</Link>
    </div>
  );
};

export default ProjectDetail;
