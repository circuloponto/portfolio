import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/MobileMenu';
/* import NavbarDesktop from './components/NavbarDesktop';
import Projects from './components/Projects';
import Slider2 from './components/Slider.jsx'; */

import Skills from './components/Skills';
import { FaArrowUp } from 'react-icons/fa';
/* ß */
/* import { EmblaCarousel } from './components/SliderEmbla.jsx'; */
import EmblaCarousel from './components/EmblaCarousel.jsx';
import Patern from './components/Patern.jsx';
const OPTIONS = {
  loop: true,
  /* breakpoints: {
    '(min-width: 768px)': { active: false },
  }, */
};
//const SLIDE_COUNT = 5;
//const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
//const SLIDES = []

function App() {
  return (
    <div className="App">
      <div
        className="scrollTopButton"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
            transition: '0.1s ease-on-out',
          })
        }
      >
        <FaArrowUp />
      </div>
      <Patern />
      <Navbar />
      {/*  <NavbarDesktop /> */}
      <Home />
      <About />
      <Skills />
      {/*  <Projects /> */}
      {/*  <Slider /> */}
      {/* <EmblaCarousel/> */}
      <EmblaCarousel /* slides={SLIDES} */ options={OPTIONS} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
