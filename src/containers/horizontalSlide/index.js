import { useState } from 'react';

import { YEARS, ROUND_DELAY } from '../../constants/index';

import './index.css';

export default function HorizontalSlide() {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ rangeValue, setRangeValue ] = useState(0);
  const [ roundInterval, setRoundInterval ] = useState(null);

  const handleInputYearChange = event => {
    clearInterval(roundInterval);
    setRangeValue(+event.target.value);
    setCurrentSlide(Math.round(event.target.value));
  };

  const handleInputYearTouchEnd = event => {
    //for 60FPS
    const tickDuration = 17; 
    const valueChangePerTick = (currentSlide - rangeValue) / ROUND_DELAY * tickDuration;
    
    const newInterval = setInterval(
      () => {
        setRangeValue(prev => Math.min(Math.max((prev + valueChangePerTick), 0), YEARS.length));
      }, tickDuration
    );

    setRoundInterval(newInterval);

    setTimeout(
      () => {
        clearInterval(newInterval);
        setRangeValue(currentSlide);
      }, ROUND_DELAY
    );
  };

  const horizontalContainerStyle = {
    left: `${ - currentSlide * 100 }%`,
  };

  const rangeValuePercents = Math.round(100 * rangeValue / (YEARS.length - 1));
  const inputYearRangeStyle = {
    background: `linear-gradient(to right, rgba(209, 234, 255, 1) 0%, rgba(209, 234, 255, 1) ${rangeValuePercents}%, rgba(209, 234, 255, 0.2) ${rangeValuePercents}%, rgba(209, 234, 255, 0.2) 100%)`,
  }

  return (
    <div className='horizontal-container'>
      <div 
        className='horizontal__slides-container'
        style={horizontalContainerStyle}
      >
        <img src='./images/3.1.jpg' alt='slide_1988'/>
        <img src='./images/3.2.jpg' alt='slide_2009'/>
        <img src='./images/3.3.jpg' alt='slide_2016'/>
      </div>
      <div className='input-year-container'>
        <input 
          type='range' 
          min='0' 
          max={ YEARS.length - 1 }
          step='any'
          list='labels'
          className='input-year__range'
          onTouchStart={event => event.stopPropagation()}
          onTouchEnd={handleInputYearTouchEnd}
          onChange={handleInputYearChange}
          value={rangeValue}
          style={inputYearRangeStyle}
        />
        <div className='input-year__labels-container'>
          {yearLabels}
        </div>
      </div>
    </div>
  );
}

const yearLabels = [];

YEARS.forEach((year, index) => {
  yearLabels.push(<p className='input-year__label' key={index}>{year}</p>)
});