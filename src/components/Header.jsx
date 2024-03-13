import Navbar from "./NavBar";
import Hero from "./Hero";
import Divider from "./Divider";
import { useLayoutEffect, useState } from "react";


export default function Header() {
  const [active, setActive] = useState()

  useLayoutEffect(() => {
    console.log('useLayoutEffect called')
    if (window.location.href.includes('reports')) {
      setActive('Reports')
    } else if (window.location.href.includes('blog')) {
      setActive('Blog')
    } else {
      setActive('News')
    }
  },[])
  
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
      <Hero active={active} handleNewsClick={handleNewsClick} handleBlogClick={handleBlogClick} handleReportsClick={handleReportsClick}/>
      <Divider />
    </header>
  );
}