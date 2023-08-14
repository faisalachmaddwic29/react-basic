import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = (props) => {
    const { children } = props;
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
