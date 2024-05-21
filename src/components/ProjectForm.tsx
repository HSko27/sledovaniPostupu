import React, { useState } from 'react';
import { useProject } from '../context/ProjectContext';
import '../styles.css';

const ProjectForm = () => {
  const [name, setName] = useState('');
  const { addProject } = useProject();

  const handleAddProject = () => {
    addProject({ id: Date.now().toString(), name, tasks: [] });
    setName('');
  };

  return (
    <div>
      <h2>Create Project</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project Name"
      />
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default ProjectForm;
