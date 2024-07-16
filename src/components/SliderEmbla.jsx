import useEmblaCarousel from 'embla-carousel-react';
import img1 from '../image/one.png';
import img2 from '../image/2.jpg';
import img3 from '../image/3.jpg';
import img4 from '../image/4.jpg';
export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <div className="projects">
        <div className="slider">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img src={img1} alt="" />
              </div>
              <div className="embla__slide">
                <img src={img2} alt="" />
              </div>
              <div className="embla__slide">
                <img src={img3} alt="" />
              </div>
              <div className="embla__slide">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
