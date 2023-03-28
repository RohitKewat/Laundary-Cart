import React from "react";
import BottomBox from "./components/BottomBox";
import Navbar from "./components/Navbar";
import SignInSection from "./components/SignInSection";
import SocialHandle from "./components/SocialHandle";
import { ContextProvider } from "./components/UserContext";


function Signin(){
    return(<>
    
    
   
    <ContextProvider>
    <Navbar/>
    <SignInSection/>
    <SocialHandle/>
    <BottomBox/>
    </ContextProvider>
    
  
   
    
    </>)
}

export default Signin