import React from 'react';
import ProjectList from './ProjectList';
import KanbanBoard from './KanbanBoard';
import '../styles.css';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ProjectList />
      <KanbanBoard projectId={''} />
    </div>
  );
};

export default Dashboard;
