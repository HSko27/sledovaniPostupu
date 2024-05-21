import React from 'react';
import { useProject } from '../context/ProjectContext';
import { Task } from '../types';
import '../styles.css';

interface KanbanBoardProps {
  projectId: string;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ projectId }) => {
  const { projects } = useProject();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const renderTasks = (tasks: Task[], status: Task['status']) => {
    return tasks
      .filter(task => task.status === status)
      .map(task => (
        <div key={task.id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>{task.deadline}</p>
        </div>
      ));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3>TODO</h3>
          {renderTasks(project.tasks, 'TODO')}
        </div>
        <div>
          <h3>IN_PROGRESS</h3>
          {renderTasks(project.tasks, 'IN_PROGRESS')}
        </div>
        <div>
          <h3>DONE</h3>
          {renderTasks(project.tasks, 'DONE')}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
