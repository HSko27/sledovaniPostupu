import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';
import { Task } from '../types';
import '../styles.css';

const TaskForm = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<Task['status']>('TODO');
  const [deadline, setDeadline] = useState('');
  const { addTask } = useProject();

  const handleAddTask = () => {
    if (projectId) {
      const newTask: Task = {
        id: Date.now().toString(),
        title,
        description,
        status,
        deadline,
      };
      addTask(projectId, newTask);
      setTitle('');
      setDescription('');
      setStatus('TODO');
      setDeadline('');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as Task['status'])}
          >
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>
        <div>
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
