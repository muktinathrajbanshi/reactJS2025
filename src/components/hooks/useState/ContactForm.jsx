import { useState } from "react";
import "./index.css";

export const ContactForm = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleFormSubmit = (event) => {
    event.preventDefault();
    const contactData = {
        username,
        password,
        message,
    };
    console.log(contactData);
    
}

  return (
    <>
      <div className="container">
        <div className="card">
            <h1>Contact Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                required 
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 />

                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                required 
                autoComplete="off" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="message">Message</label>
                <textarea 
                name="message" 
                required
                autoComplete="off"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
      </div>
    </>
  );
};
