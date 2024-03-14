// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header.jsx";
import NewsBody from "./components/news/NewsBody.jsx";
import BlogBody from "./components/blog/BlogBody.jsx";
import ReportsBody from "./components/reports/ReportsBody.jsx";
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import { DarkModeProvider } from './Context/DarkModeContext.jsx';
import { SearchTermProvider } from "./Context/SearchTermContext.jsx";



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
