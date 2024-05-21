export interface Task {
    id: string;
    title: string;
    description?: string;
    status: 'TODO' | 'IN_PROGRESS' | 'DONE';
    deadline?: string;
  }
  
  export interface Project {
    id: string;
    name: string;
    description?: string;
    tasks: Task[];
  }
  