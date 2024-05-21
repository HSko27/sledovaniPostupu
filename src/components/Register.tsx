import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();

  const handleRegister = () => {
    login(username);
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
