import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Zde byste provedli ověření uživatelského jména a hesla
    // Například, pokud jsou uživatelské jméno a heslo správné, nastavte isLoggedIn na true
    if (username === 'HSKO' && password === '1234') {
      setIsLoggedIn(true);
    }
  };

  // Pokud je uživatel přihlášen, přesměrujeme ho na /dashboard
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
