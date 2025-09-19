import React from 'react';
import "../Hooks.css";

export const RegistrationForm = () => {
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
            />

            <label htmlFor="lastName">
                <b>Last Name</b>
            </label>
            <input 
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
             />

             <label htmlFor="email">
                <b>Email</b>
             </label>
             <input 
             type="text"
             placeholder="Enter Email"
             name="email"
             required
              />

              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input 
              type="text" 
                placeholder="Enter Password"    
                name="password"   
                required     
              />

              <label htmlFor="phone">
                <b>Phone Number</b>
              </label>

              <input 
              type="text"
              name="phone"
              placeholder="9823978647"
              required
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
