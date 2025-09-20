import { useState } from "react";
import "./index.css";

export const ContactForm = () => {

// const [username, setUsername] = useState("");
// const [email, setEmail] = useState("");
// const [message, setMessage] = useState("");

const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
});

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setContactData((prev) => ({
        ... prev, 
        [name]: value,
    }));
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    // const contactData = {
    //     username,
    //     email,
    //     message,
    // };


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
                value={contactData.username}
                onChange={handleInputChange}
                // onChange={(e) => setUsername(e.target.value)}
                 />

                <label htmlFor="password">Email</label>
                <input 
                type="email" 
                name="email" 
                required 
                autoComplete="off" 
                value={contactData.email}
                onChange={handleInputChange}
                // onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="message">Message</label>
                <textarea 
                name="message" 
                required
                autoComplete="off"
                rows="6"
                value={contactData.message}
                onChange={handleInputChange}
                // onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
      </div>
    </>
  );
};
