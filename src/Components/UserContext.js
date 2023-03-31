import React from "react";
import { useState } from "react";

const CreateContext = React.createContext();

const ContextProvider = (props)=>{

    const [loggedin, setLoggedin] =useState(true);
    

    return(<>
    <CreateContext.Provider value={{loggedin, setLoggedin}}>
        {props.children}
    </CreateContext.Provider>
    
    </>)
}

export {ContextProvider,CreateContext};