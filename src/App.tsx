import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from './context/ProjectContext';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProjectForm from './components/ProjectForm';
import TaskForm from './components/TaskForm';
import ProjectDetail from './components/ProjectDetail';
import './styles.css'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-project" element={<ProjectForm />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/project/:projectId/create-task" element={<TaskForm />} />
            <Route path="/" element={<NavigateToDashboard />} /> {/* Pokud není uvedena žádná cesta, automaticky přesměruj na dashboard */}
          </Routes>
        </ProjectProvider>
      </AuthProvider>
    </Router>
  );
};

const NavigateToDashboard = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/login'); // Automatické přesměrování na dashboard
  }, [navigate]);

  return null;
};

export default App;
