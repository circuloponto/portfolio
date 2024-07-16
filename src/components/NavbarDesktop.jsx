const NavbarDesktop = () => {
  return (
    <nav className="header">
      <div className="logo">PORTFOLIO</div>
      <div className="menu-items">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/circuloponto"
          className="button-52"
        >
          Github Profile
        </button>
        <button
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/nuno-cortez-31072314/"
          className="button-52"
        >
          LinkedIn Profile
        </button>

        <a href="#" className="button tick">
          github
        </a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
