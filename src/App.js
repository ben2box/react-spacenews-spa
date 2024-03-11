// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./App.css";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { DarkModeProvider } from './Context/DarkModeContext';

export const SearchContext = createContext({searchTerm:'', updateSearchTerm: ()=>{}})

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const updateSearchTerm = (e) => setSearchTerm(e);


  return (
    <div className="App"> {/*data-bs-theme="dark">*/}
    <DarkModeProvider>
      <SearchContext.Provider value={{searchTerm, updateSearchTerm}}>
        <Header />
        <Body />
        <Footer />
      </SearchContext.Provider>
    </DarkModeProvider>
    </div>
  );
}

export default App;
