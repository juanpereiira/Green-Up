
import React from "react";
import  { useState } from "react";
import "./login.css";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Organizer Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required/>
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>
        <button type="submit"> 
          Login</button>
      </form>
    </div>
  
  );
}
