import React, { createContext, useState } from "react";


const UserContext = createContext();

function ContextProvider(props){

    const [user,setUser] = useState(false);

    return(
        <>
        <UserContext.Provider value={{user,setUser}}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}

export {ContextProvider,UserContext}