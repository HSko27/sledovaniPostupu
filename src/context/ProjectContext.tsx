import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Project, Task } from '../types';

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  addTask: (projectId: string, task: Task) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const addTask = (projectId: string, task: Task) => {
    setProjects(projects.map(project => 
      project.id === projectId ? { ...project, tasks: [...project.tasks, task] } : project
    ));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, addTask }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
