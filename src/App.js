// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/header";
import NewsBody from "./components/news/newsBody";
import BlogBody from "./components/blog/blogBody";
import ReportsBody from "./components/reports/reportsBody";
import NotFound from "./components/notFound";
import Footer from "./components/footer";
import { DarkModeProvider } from './context/darkModeContext';
import { SearchTermProvider } from "./context/searchTermContext";



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
