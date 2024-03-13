import Navbar from "./NavBar";
import Hero from "./Hero";
import Divider from "./Divider";
import { useState } from "react";


export default function Header() {
  const [active, setActive] = useState('News')
  
  const handleNewsClick = () => {
    setActive('News')
  }

  const handleBlogClick = () => {
    setActive('Blog')
  }

  const handleReportsClick = () => {
    setActive('Reports')
  }

  
  return (
    <header>
      <Navbar active={active} handleNewsClick={handleNewsClick} handleBlogClick={handleBlogClick} handleReportsClick={handleReportsClick}/>
      <Hero handleNewsClick={handleNewsClick} handleBlogClick={handleBlogClick} handleReportsClick={handleReportsClick}/>
      <Divider />
    </header>
  );
}