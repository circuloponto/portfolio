/* eslint-disable react/prop-types */

import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section id="projects" className="projects">
      {/* <div className="outlineDotsProjects"></div> */}
      <div className="projectsTitleText">
        <div className="projectsTitle">PROJECTS</div>
      </div>
      <section className="embla">
        {/* <div className="projectsTitle"> */}

        {/* </div> */}
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {/* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))} */}
            <div className="embla__slide" key={0}>
              <div className="embla__slide__number">
                <div className="background1">
                  <div className="projectImg1"></div>
                  <div className="information">
                    <div className="infoTitle">
                      <div className="circle"></div>
                      <div className="infoText">CONSULTIS</div>
                    </div>
                    <div className="text">
                      This was my first website, it came came out ok
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="http://consultis.pt"
                      className="link"
                    >
                      Launch Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide" key={1}>
              <div className="embla__slide__number">
                <div className="background1">
                  <div className="projectImg2"></div>
                  <div className="information">
                    <div className="infoTitle">
                      <div className="circle"></div>
                      <div className="infoText">KANBAN</div>
                    </div>
                    <div className="text">
                      This was my first website, it came came out ok
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="http://consultis.pt"
                      className="link"
                    >
                      Launch Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide" key={2}>
              <div className="embla__slide__number">
                <div className="background1">
                  <div className="projectImg3"></div>
                  <div className="information">
                    <div className="infoTitle">
                      <div className="circle"></div>
                      <div className="infoText">TODOIST AI</div>
                    </div>
                    <div className="text">
                      This was my first website, it came came out ok
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="http://consultis.pt"
                      className="link"
                    >
                      Launch Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide" key={3}>
              <div className="embla__slide__number">
                <div className="background1">
                  <div className="projectImg4"></div>
                  <div className="information">
                    <div className="infoTitle">
                      <div className="circle"></div>
                      <div className="infoText">FINANCE</div>
                    </div>
                    <div className="text">
                      This was my first website, it came came out ok
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="http://consultis.pt"
                      className="link"
                    >
                      Launch Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                  )}
                />
              ))}
            </div>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default EmblaCarousel;
