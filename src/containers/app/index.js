import React, { useState } from 'react';

import ParallaxSlideContainer from '../parallaxSlideContainer/index';
import Pulsar from '../pulsar/index';
import Pagination from '../pagination/index';
import HorizontalSlide from '../horizontalSlide/index';

import { SWIPE_DISTANCE, MAX_PAGE, MIN_PAGE } from '../../constants/index'

import './index.css';

export default function App() {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ startY, setStartY ] = useState(null);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ footerOpened, setFooterOpened ] = useState(false);

  const handleTouchStart = event => {
    setStartY(event.touches[0].pageY);
    setIsScrolled(false);
  };

  const handleTouchMove = event => {
    if ((event.touches[0].pageY - startY) > SWIPE_DISTANCE && !isScrolled) {
      if (footerOpened) {
        setFooterOpened(false) 
      } else if (currentSlide > MIN_PAGE) {
        setCurrentSlide(prev => Math.max(--prev, MIN_PAGE));
      }
      setIsScrolled(true);
    }

    if ((event.touches[0].pageY - startY) < -SWIPE_DISTANCE && !isScrolled) {
      if (currentSlide === MAX_PAGE) {
        setFooterOpened(true)
      } else {
        setCurrentSlide(prev => ++prev);
      }
      setIsScrolled(true);
    }
  };

  const slidesContainerStyle = {
    top: `${ - currentSlide * 100 }%`,
  };

  let nextPageClass = 'next-page';
  if (currentSlide === 0) nextPageClass += ' next-page--active';

  let footerFadingClass = 'footer__fading';
  let footerSlidingClass = 'footer__sliding';
  if (footerOpened) {
    footerFadingClass += ' footer__fading--active';
    footerSlidingClass += ' footer__sliding--active';
  }

  return (
    <div 
      className='view-wrapper'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className='slides-container'
        style={slidesContainerStyle}
      >
        <ParallaxSlideContainer
          currentSlide={currentSlide}
          thisSlideNumber='0'
          parallaxContent={slide1ParallaxContent}
        >
          <img src='./images/1.jpg' alt='iceberg_top'/>
        </ParallaxSlideContainer>
        <ParallaxSlideContainer
          currentSlide={currentSlide}
          thisSlideNumber='1'
          parallaxContent={slide2ParallaxContent}
        >
          <img src='./images/2.jpg' alt='iceberg_bottom'/>
        </ParallaxSlideContainer>
        <HorizontalSlide/>
      </div>
      <Pagination currentSlide={currentSlide}/>
      <img 
        src='./images/next-page.png' 
        alt='next_page_bar'
        className={nextPageClass}
      />
      <div className={footerFadingClass}/>
      <div className={footerSlidingClass}>
        <img 
          src='./images/refs.png' 
          alt='footer_background'
          className='footer__background'
        />
        <ol className='footer__content'>
          <li>Defronzo RA. Diabetes. 2009 Apr;58(4):773-95</li>
          <li>Inzucchi SE, Sherwin RS in: Cecil Medicine 2011</li>
          <li>Stanley S. Schwartz, Solomon Epstein,Barbara E. Corkey, Struan F.A. Grant,James R. Gavin III, and Richard B. Aguilar The Time Is Right
for a New Classification System for Diabetes: Rationale and Implications of the b-Cell–Centric Classification Schema Diabetes Care 2016; 39:179–186 | DOI: 10.2337/dc15-1585</li>
        </ol>
      </div>
    </div>
  );
}

const slide1ParallaxContent = (
  <React.Fragment>
    <img 
      src='./images/1.text--parallax.png' 
      alt='iceberg_top_text'
    />
    <Pulsar
      top='260'
      left='561'
      size='50'
    />
    <Pulsar
      top='423'
      left='270'
      size='30'
    />
    <Pulsar
      top='535'
      left='478'
      size='15'
    />
    <Pulsar
      top='514'
      left='819'
      size='17'
    />
  </React.Fragment>
);

const slide2ParallaxContent = (
  <img 
    src='./images/2.text--parallax.png' 
    alt='iceberg_bottom_text'
  />
);