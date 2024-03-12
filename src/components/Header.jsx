import Navbar from "./NavBar";
import Hero from "./Hero";
import Divider from "./Divider";
import Title from "./SectionTitle";


export default function Header() {

  
  return (
    <header>
      <Navbar />
      <Hero />
      <Divider />
      <Title text='Latest News'/>
    </header>
  );
}