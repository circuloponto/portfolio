import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
const Projects2 = () => {
  return (
    <div>
      <div className="projects">
        <div className="slider">
          <h1>Flickity - groupCells</h1>

          <div
            className="carousel"
            data-flickity='{ "cellAlign": "left", "contain": true }'
          >
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
            <div className="carousel-cell"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
