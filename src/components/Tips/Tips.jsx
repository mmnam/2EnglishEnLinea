import React, { useState } from 'react';
import { useRef } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
import tip1 from './1.png';
import tip2 from './2.png';
import tip3 from './3.png';
import tip4 from './4.png';
import tip5 from './5.png';
import tip6 from './6.png';
import tip7 from './7.png';
import "./tips.css";

const items = [
  {
    src: tip1,
    /* altText: 'Slide 1', */
    /* caption: 'Slide 1', */
    key: 1,
  },
  {
    src: tip2,
    /* altText: 'Slide 2',
    caption: 'Slide 2', */
    key: 2,
  },
  {
    src: tip3,
    /* altText: 'Slide 3',
    caption: 'Slide 3', */
    key: 3,
  },
  {
    src: tip4,
    /* altText: 'Slide 3',
    caption: 'Slide 3', */
    key: 3,
  },
  {
    src: tip5,
    /* altText: 'Slide 3',
    caption: 'Slide 3', */
    key: 3,
  },
  {
    src: tip6,
    /* altText: 'Slide 3',
    caption: 'Slide 3', */
    key: 3,
  },
  {
    src: tip7,
    /* altText: 'Slide 3',
    caption: 'Slide 3', */
    key: 3,
  },
];

function Tips(args) {
  const refTips = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img id="tip" src={item.src} className="rounded mx-auto d-block img-fluid" alt={item.altText} /* style={{with:400, height:400}} *//>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section ref={refTips} id="refTips">
      <Container className="carousel carousel-dark slide">
        <div className='tipTexto mb-5'>

        <h2>Tips importantes para mejorar tu inglés </h2>
        <p id="parrafo">Aprende estos tips para evitar errores comunes al hablar y tu inglés mejorará mucho en muy poco tiempo.</p>


        </div>
        
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </Container>
    </section>
  );
}

export default Tips;
