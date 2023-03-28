import React from "react";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./components/UserContext";


function User(){
    return(<>
    <ContextProvider>
    <Navbar/>
    </ContextProvider>
    </>)}

export default User