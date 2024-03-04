// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export const SearchContext = createContext({searchTerm:'testing', updateSearchTerm: ()=>{}})

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const updateSearchTerm = (e) => setSearchTerm(e)

  return (
    <div className="App" data-bs-theme="dark">
      <SearchContext.Provider value={{searchTerm, updateSearchTerm}}>
        <Header />
        <Body />
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
