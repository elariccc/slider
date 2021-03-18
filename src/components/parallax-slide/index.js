import { memo } from 'react';
import PropTypes from 'prop-types';

import './parallax-slide.css';

function Component({ currentSlide, thisSlideNumber, parallaxContent, children}) {
  let parallaxUpperClass = 'parallax__upper';

  if (currentSlide < Number(thisSlideNumber)) parallaxUpperClass += ' parallax__upper--bottom';
  if (currentSlide > Number(thisSlideNumber)) parallaxUpperClass += ' parallax__upper--top';
  
  return(
    <div className='parallax'>
      <div className='parallax__base'>
        {children}
      </div>
      <div className={parallaxUpperClass}>
        {parallaxContent}
      </div>
    </div>
  );
}

Component.propTypes = {
  currentSlide: PropTypes.number,
  thisSlideNumber: PropTypes.number,
  parallaxContent: PropTypes.node,
  children: PropTypes.node,
};

const ParallaxSlide = memo(Component);

export default ParallaxSlide