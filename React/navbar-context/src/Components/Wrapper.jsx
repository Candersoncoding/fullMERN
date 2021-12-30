import React, { useState, createContext } from "react";


export const NameContext = createContext();

export default function Wrapper ({children}) {

    const [currentName, setCurrentName] = useState("");

    return(
        <NameContext.Provider value={currentName, setCurrentName}>
            {children}
        </NameContext.Provider>
    )
}

