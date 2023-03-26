import React, { useState } from "react";
import './signin.css'
function SignInSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call sign in API endpoint with email and password data
  };
  return (
    <>
      <div className="sign-box">
        <div className="reg-box">
          <h1 className="heading">Laundry Service</h1>
          <p className="text">Doorstep Wash & Dryclean Service</p>
          <p className="text1">Don’t Have An Account?</p>
          <button className="reg-button">Register</button>
        </div>
        <p className="line"></p>
        <div className="form-box">
          <h1 className="heading1">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Mobile / Email"
            className="input-form"
            />

            <br />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-form1"
             
            />

            <br />
            <p className="text2">Forget Password?</p>
            <button type="submit" className="sign-button">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInSection;
