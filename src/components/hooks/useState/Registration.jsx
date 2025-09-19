import React, { useState } from 'react';
import "../Hooks.css";

export const RegistrationForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {

        const {name, value} = e.target;

        switch(name){
            case "firstName":
                setFirstName(e.target.value);
                break;
        }

        setFirstName(e.target.value);
        setLastName(e.target.value);
        setEmail(e.target.value);
        setPassword(e.target.value);
        setPhoneNumber(e.target.value);
    };

  return (
    <>
      <form>
        <div className="container">
            <h1>sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <label htmlFor="firstName">
                <b>First Name</b>
            </label>
            <input 
            type="text" 
            name="firstName"   
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={handleInputChange}
            />

            <label htmlFor="lastName">
                <b>Last Name</b>
            </label>
            <input 
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={lastName}
            onChange={handleInputChange}             
            />

             <label htmlFor="email">
                <b>Email</b>
             </label>
             <input 
             type="text"
             placeholder="Enter Email"
             name="email"
             required
             value={email}
             onChange={handleInputChange}          
             />

              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input 
              type="text" 
                placeholder="Enter Password"    
                name="password"   
                required    
                value={password} 
                onChange={handleInputChange}
              />

              <label htmlFor="phone">
                <b>Phone Number</b>
              </label>

              <input 
              type="phone"
              name="phone"
              placeholder="9823978647"
              required
              value={phoneNumber}
              onChange={handleInputChange}
               />

               <p>
                By Creating an account you agree to our 
                <a href="#" style={{ color: "dodgerblue" }}>
                    Terms & Privacy
                </a>
               </p>

               <div className="clearfix">
                <button type="submit" className="btn">
                    Sign Up
                </button>
               </div>
        </div>
      </form>
    </>
  );
};
