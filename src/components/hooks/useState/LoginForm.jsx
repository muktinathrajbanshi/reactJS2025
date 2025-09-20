import React, { useState } from 'react';
import "./index.css";

export const LoginForm = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


  return (
    <>
      <div className="container">
        <div className="card">
            <h1>Login Form</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                required 
                autoComplete="off"
                value={usename}
                onChange={(e) => setUsername(e.target.value)}
                 />

                <label htmlFor="password">Password</label>
                <input 
                type="text" 
                name="password" 
                required 
                autoComplete="off" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
      </div>
    </>
  );
};
