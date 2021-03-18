import React, { useState } from 'react';

import HorizontalSlide from '../horizontal-slider/horizontal-slider';
import ParallaxSlide from '../../components/parallax-slide';
import Pagination from '../../components/pagination';
import NextPage from '../../components/next-page';
import Footer from '../../components/footer';
import slide1ParallaxContent from '../../components/slide-1-parallax-content';
import slide2ParallaxContent from '../../components/slide-2-parallax-content';

import { SWIPE_DISTANCE, MAX_PAGE, MIN_PAGE } from '../../constants'

import './app.css';

export default function App() {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ startY, setStartY ] = useState(null);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ isFooterOpened, setIsFooterOpened ] = useState(false);

  const handleTouchStart = event => {
    setStartY(event.touches[0].pageY);
    setIsScrolled(false);
  };

  const handleTouchMove = event => {
    if ((event.touches[0].pageY - startY) > SWIPE_DISTANCE && !isScrolled) {
      if (isFooterOpened) {
        setIsFooterOpened(false) 
      } else if (currentSlide > MIN_PAGE) {
        setCurrentSlide(prev => Math.max(--prev, MIN_PAGE));
      }
      setIsScrolled(true);
    }

    if ((event.touches[0].pageY - startY) < -SWIPE_DISTANCE && !isScrolled) {
      if (currentSlide === MAX_PAGE) {
        setIsFooterOpened(true)
      } else {
        setCurrentSlide(prev => ++prev);
      }
      setIsScrolled(true);
    }
  };

  const slidesContainerStyle = {
    top: `${ - currentSlide * 100 }%`,
  };

  return (
    <div 
      className='view-wrapper'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className='view-wrapper__slides'
        style={slidesContainerStyle}
      >
        <ParallaxSlide
          currentSlide={currentSlide}
          thisSlideNumber={0}
          parallaxContent={slide1ParallaxContent()}
        >
          <img src='./images/1.jpg' alt='iceberg_top'/>
        </ParallaxSlide>
        <ParallaxSlide
          currentSlide={currentSlide}
          thisSlideNumber={1}
          parallaxContent={slide2ParallaxContent()}
        >
          <img src='./images/2.jpg' alt='iceberg_bottom'/>
        </ParallaxSlide>
        <HorizontalSlide/>
      </div>
      <Pagination currentSlide={currentSlide}/>
      <NextPage active={currentSlide === 0}/>
      <Footer active={isFooterOpened}/>
    </div>
  );
}