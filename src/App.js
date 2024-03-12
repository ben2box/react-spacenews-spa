// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { DarkModeProvider } from './Context/DarkModeContext';
import { SearchTermProvider } from "./Context/SearchTermContext";



function App() {

  return (
    <div className="App">
      <DarkModeProvider>
        <SearchTermProvider>
          <Header />
          <Body />
          <Footer />
        </SearchTermProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
