import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import './signin.css'
// import { CreateContext } from "./UserContext";


function SignInSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [phone,setPhone] = useState()
  const [err,setErr] =useState('')
  const navigate = useNavigate();
  // const {loggedin,setLoggedin} = useContext(CreateContext)
  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const{data} = await axios.post('https://main-project-backend.onrender.com/signin', { email, password});
      // console.log(response.data);
      const {token}= data;
      console.log(token)
      localStorage.setItem("token", token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //  await setLoggedin(true)
    
      setEmail("")
      setPassword("")
      // setPhone()
      setErr('')
      navigate('/orders'); 
      
    } catch (error) {
      setErr(error.response.data)
      console.log(error)
    }
  };
  return (
    <>
      <div className="sign-box">
        <div className="reg-box">
          <h1 className="heading">Laundry Service</h1>
          <p className="text">Doorstep Wash & Dryclean Service</p>
          <p className="text1">Don’t Have An Account?</p>
          <Link to={"/"}><button className="reg-button">Register</button></Link>
          
        </div>
        <p className="line"></p>
        <div className="form-box">
          <h1 className="heading1">Sign In</h1>
          <form onSubmit={handleSubmit}>
          {email && <p id="input-sign-lable">Email</p>}
            <input
              type="text"
              value={email}
              onChange={(e) => {setEmail(e.target.value) 
                }}
              placeholder="Mobile / Email"
            className={email?"input-sign":"input-form"}
            />
              {err&&<p id="alert-msg">Please enter a valid credentials</p>}
            {password && <p id="input-sign-lable">Password</p>}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={password?"input-sign":"input-form1"}
             
            />
          
          
            <p className="text2">Forget Password?</p>
            <button type="submit" className="sign-button">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInSection;
