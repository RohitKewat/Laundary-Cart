import React from "react";
import BottomBox from "./Components/BottomBox";
import Navbar from "./Components/Navbar";
import RegisterSection from "./Components/RegisterSection";

import SocialHandle from "./Components/SocialHandle";
// import {ContextProvider } from "./components/UserContext";


function Register(){
    return(<>
   
    <Navbar/>
    
    <RegisterSection/>
    <SocialHandle/>
    <BottomBox/>
    </>)
}

export default Register