const About = () => {
  return (
    <section id="section2" className="about">
      <div className="overlay"></div>
      <div className="aboutTitle">
        <div className="aboutTitleText">ABOUT ME</div>
      </div>
      {/* <div className="titleSVG">
        <svg viewBox="0 0 600 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              About Me
            </text>
          </symbol>

          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
        </svg>
      </div> */}
      <div className="aboutText">
        I&apos;m a sound designer turned web developer, currently looking for a
        first opportunity as a frontend developer.
      </div>
    </section>
  );
};

export default About;
