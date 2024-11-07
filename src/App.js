import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nom d'utilisateur : ${username}\nMot de passe : ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom d'utilisateur :</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Mot de passe :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginForm;
