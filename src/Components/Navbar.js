import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import './navbar.css'
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials=true

function Navbar(){

const [id,setId] = useState('')
const navigate = useNavigate();

// Get JWT token from cookie

const token = localStorage.getItem("token");
console.log(token);
useEffect(()=>{
   
    if(token){
       async function getData(){
       
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        
            let response = await axios.get('https://main-project-backend.onrender.com/protected',{
                // withCredentials:true,
                headers:{
                    "Content-Type":"application/js",
                    "Authorization": `Bearer ${token}` // make sure this header is set
                }
            })
            let name = response.data
            
            setId(name)
            
        }
        getData()
    }
},[token])

async function logout(){
    let data = await axios.post('https://main-project-backend.onrender.com/logout',{
        withCredentials:true
    })
    alert("Want to Logout!");
    localStorage.removeItem("token");
    navigate('/')
    console.log(data.data)
}
return(
    <>
    <div className="nav-container">
        <div className="head-logo-container">
            <h1 className="head-logo">
            LAUNDRY
            </h1>
        </div>
        <div className="tail-logo-container">
            <p className="tail1-logo">Home</p>
            <p className="tail1-logo">Pricing</p>
            <p className="tail1-logo">Career</p>
           { id ?<p className="tail-logo" onClick={logout}>{id}</p>:<p className="tail-logo">Sign In</p>}
        </div>
    </div>
    </>
)
}

export default Navbar
