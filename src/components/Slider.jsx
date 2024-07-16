import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '../image/one.png';
import img2 from '../image/2.jpg';
import img3 from '../image/3.jpg';
import img4 from '../image/4.jpg';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <div style={{ height: '500px' }}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        // means to render carousel on server-side.
        infinite={true}
      >
        <div style={{ height: '500px' }}>
          <img src={img1} alt="" style={{ width: '500px', height: '500px' }} />
        </div>
        <div style={{ height: '500px' }}>
          <img src={img2} alt="" style={{ width: '500px', height: '500px' }} />
        </div>
        <div style={{ height: '500px' }}>
          {' '}
          <img src={img3} alt="" style={{ width: '500px', height: '500px' }} />
        </div>
        <div style={{ height: '500px' }}>
          {' '}
          <img src={img4} alt="" style={{ width: '500px', height: '500px' }} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
