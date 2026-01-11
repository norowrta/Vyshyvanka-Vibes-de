import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Collection from "./components/Collection/Collection";
import Newsletter from "./components/Newsletter/Newsletter";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/MobileNav/MobileNav";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 150,
    });
  }, []);

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
  };

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Collection />
      <Newsletter />
      <Testimonials />
      <Footer />
      <MobileNav onClose={closeMenu} />
    </>
  );
}
