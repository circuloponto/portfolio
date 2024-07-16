import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projectsTitle">PROJECTS</div>
      <div className="slider">
        <AwesomeSlider>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Projects;
