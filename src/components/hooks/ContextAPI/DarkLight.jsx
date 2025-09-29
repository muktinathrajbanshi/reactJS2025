import { useState } from "react";

const {ThemeContext} from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark");


    return (
    <ThemeContext.Provider value={theme}>
        {children}
     </ThemeContext.Provider>
    );
};

// creating a component 

export const DarkLight = () => {
    return (
        <>
            <div>
                <h1>Dark Light Mode Website</h1>
                <p>Hello!! My React v19 Fans 👍</p>
                <button>switch to light mode</button>
            </div>
        </>
    )
}