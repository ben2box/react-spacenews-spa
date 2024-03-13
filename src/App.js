// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import NewsBody from "./components/NewsBody";
import BlogBody from "./components/BlogBody";
import ReportsBody from "./components/ReportsBody";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import { DarkModeProvider } from './Context/DarkModeContext';
import { SearchTermProvider } from "./Context/SearchTermContext";



function App() {

  return (
    <div className="App">
      <DarkModeProvider>
        <SearchTermProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<NewsBody />} />
              <Route path="/blog" element={<BlogBody />} />
              <Route path="/reports" element={<ReportsBody />} />
              <Route path='*' element={<NotFound />}/>
            </Routes>
            <Footer />
          </Router>
        </SearchTermProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
