import {createContext, useState} from 'react';

const SearchTermContext = createContext();

function SearchTermProvider({children}){
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <SearchTermContext.Provider value={{searchTerm, setSearchTerm}}>
            {children}
        </SearchTermContext.Provider>
    )

}

export {SearchTermContext, SearchTermProvider}
