import { useScramble } from 'use-scramble';

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
  return (
    <section id="home" className="home">
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
