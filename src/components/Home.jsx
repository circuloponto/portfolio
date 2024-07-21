import { useScramble } from 'use-scramble';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
const Home = () => {
  const { ref, replay } = useScramble({
    text: 'Frontend Developer',
    range: [65, 125],
    speed: 0.7,
    tick: 1,
    step: 1,
    scramble: 15,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: true,
  });

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 400;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  return (
    <section id="home" className="home">
      {width < breakpoint ? (
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      ) : null}
      <div className="homeInfo">
        <div className="title">
          <span></span>
          <div
            onMouseOver={replay}
            onFocus={replay}
            ref={ref}
            className="textScramble"
          >
            Frontend Developer
          </div>
        </div>
        <div className="presentation">
          Hi, my name is <span>Nuno Cortez</span>
        </div>
        <div className="introduction">
          I&apos;m a sound designer turned web developer, currently looking for
          a first opportunity at a frontend position.
        </div>
        <a href="#contact" className="button-52">
          Contact Me
        </a>
      </div>
      <div className="picture">
        <div className="innerPicture">
          {/* <div className="border"></div> */}
          <div className="photo"></div>
          <div className="photoGlitch"></div>
          <div className="points">
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
