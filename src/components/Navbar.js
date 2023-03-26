import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import './navbar.css'
function Navbar(){
const {user,setUser} = useContext(UserContext)
const [id,setId] = useState('')
useEffect(()=>{
    if(user){
       async function getData(){
            let response = await axios.get('')
            let name = response.data.name
            setId(name)
        }
        getData()
    }
},[user])
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
           { user ?<p className="tail-logo">{id}</p>:<p className="tail-logo">Sign In</p>}
        </div>
    </div>
    </>
)
}

export default Navbar