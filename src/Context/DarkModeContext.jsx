import {createContext, useState} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({children}){

    const [darkMode, setDarkMode] = useState(true)
    darkMode ? document.body.setAttribute('data-bs-theme', 'dark') : document.body.setAttribute('data-bs-theme', 'light');
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}