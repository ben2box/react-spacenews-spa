// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";

function Header() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Divider />
    </div>
  );
}

function Body() {
  return (
    <div>
      <div>This is where the News Section goes</div>
      <div>This is where the Upcoming Launches Section goes</div>
      <div>This is where the Archive (?) goes</div>
    </div>
  );
}

function Footer() {
  return <div>This is a footer</div>;
}

function App() {
  return (
    <div className="App" data-bs-theme='dark'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
