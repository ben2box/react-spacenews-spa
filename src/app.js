import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/header.jsx";
import NewsBody from "./components/news/newsBody.jsx";
import BlogBody from "./components/blog/blogBody.jsx";
import ReportsBody from "./components/reports/reportsBody.jsx";
import NotFound from "./components/notFound.jsx";
import Footer from "./components/footer.jsx";
import { DarkModeProvider } from './context/darkModeContext.jsx';
import { SearchTermProvider } from "./context/searchTermContext.jsx";



function App() {

  return (
    <div className="App">
      <DarkModeProvider>
        <SearchTermProvider>
          <Router basename="/react-spacenews-spa">
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
