import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Cards/>
      <Footer/>
    </div>
    </>
  );
}
