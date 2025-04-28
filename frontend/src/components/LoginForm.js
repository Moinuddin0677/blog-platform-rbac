import React, { useState } from 'react';
import { login } from '../api/auth';


const decodeJWT = (token) => {
  // JWT is in the form of 'header.payload.signature'
  const payload = token.split('.')[1]; // Extract the payload (middle part)
  const decodedPayload = JSON.parse(atob(payload)); // Decode and parse the base64 payload
  return decodedPayload;
};

const getRoleFromJWT = (token) => {
  const decoded = decodeJWT(token); // Decode the token
  return decoded.role; // Extract and return the role
};


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem('token', res.data.token);
      const role = getRoleFromJWT(res.data.token);

      localStorage.setItem('role', role);
      window.location.href = '/';
    } catch (err) {
      alert('Login failed: ' + err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
