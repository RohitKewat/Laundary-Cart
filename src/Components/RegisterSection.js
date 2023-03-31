import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
function RegisterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateName, setStateName] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
    const [verify,setVerify] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name,
        email,
        phone,
        stateName,
        district,
        pincode,
        address,
        password,
      };
      await axios.post("https://main-project-backend.onrender.com/signup", newUser);
      alert("Sign up successful!");
      setName("")
      setEmail("")
      setAddress('')
      setPhone("")
      setDistrict('')
      setPassword("")
      setStateName("")
      setVerify("")
      setPincode('')
      navigate('/signin')
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="reg-container">
        <div className="signin-container">
          <h1 className="reg-heading">Laundry Service</h1>
          <p className="reg-tail">Doorstep Wash & Dryclean Service</p>
          <p className="reg-tail1">Already Have Account</p>
          <Link to={"/signin"}><button className="sign-in-button">Sign In</button></Link>
          
        </div>
        <p className="line"></p>
        <div className="register-container">
          <h1 id="heading-reg">REGISTER</h1>

          <form onSubmit={handleSubmit}>
            <div id="input-row">
              <div>
                {name && <p id="input1-lable">Name*</p>}
                <input
                  required
                  type="text"
                  id={name ? "input11" : "input1"}
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                {email && <p id="input2-lable">Email*</p>}
                <input
                  required
                  type="email"
                  id={email ? "input22" : "input2"}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div id="input-row">
              <div>
                {phone && <p id="input1-lable">Phone*</p>}
                <input
                  required
                  type="number"
                  id={phone ? "input11" : "input1"}
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                {stateName && <p id="input2-lable">State*</p>}
                <input
                  required
                  type="text"
                  id={stateName ? "input22" : "input2"}
                  placeholder="State"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div id="input-row">
              <div>
                {district && <p id="input1-lable">District*</p>}
                <input
                  required
                  type="text"
                  id={district ? "input11" : "input1"}
                  placeholder="District"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div>
                {address && <p id="input2-lable">Address*</p>}
                <input
                  required
                  type="text"
                  id={address ? "input22" : "input2"}
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <br />
            <div id="input-row">
              <div>
                {pincode && <p id="input1-lable">Pincode*</p>}
                <input
                  required
                  type="number"
                  id={pincode ? "input11" : "input1"}
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div>
                {password && <p id="input2-lable">Password*</p>}
                <input
                  required
                  type="password"
                  id={password ? "input22" : "input2"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <br />
            <div>
              {password && <p id="input1-lable">Confirm Password*</p>}
              <input
                required
                type="password"
                id={password ? "input11" : "input1"}
                placeholder="Confirm Password"
                value={verify}
                onChange={(e) => setVerify(e.target.value)}
              />
              {verify!==password&&verify!=="" && <p id="alert">Password not match</p>}
            </div>

            <p id="terms">
              <input type="checkbox" required />I agree to Terms & Condition
              receiving marketing and promotional materials
            </p>

            <button type="submit" id="register-but">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default RegisterSection;
