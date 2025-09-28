import { createContext } from "react";


// 1 step 
export const BioContext = createContext();


// 2nd step 
export const BioProvider = ({ children }) => {
    const myName = "muktinath";
    const myAge = 30;
    console.log(children);
    

    return(
        <BioContext.Provider value={{myName, myAge}}>
        {children}
        </BioContext.Provider>
    ); 
};