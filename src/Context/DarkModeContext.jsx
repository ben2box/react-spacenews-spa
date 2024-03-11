import {createContext, useState} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props){

    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        darkMode ? document.body.setAttribute('data-bs-theme', 'light') : document.body.setAttribute('data-bs-theme', 'dark');
    };

    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider}