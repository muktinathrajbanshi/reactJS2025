import { createContext } from "react";


// 1 step 
export const BioContext = createContext();


// 2nd step 
export const BioProvider = () => {
    const myName = "muktinath";

    return <BioContext.Provider value={myName}></BioContext.Provider>;
};