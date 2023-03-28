import React from "react";
import BottomBox from "./components/BottomBox";
import Navbar from "./components/Navbar";
import RegisterSection from "./components/RegisterSection";

import SocialHandle from "./components/SocialHandle";
import {ContextProvider } from "./components/UserContext";


function Register(){
    return(<>
    <ContextProvider>
    <Navbar/>
    </ContextProvider>
    <RegisterSection/>
    <SocialHandle/>
    <BottomBox/>
    </>)
}

export default Register