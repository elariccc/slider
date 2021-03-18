import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './footer.css';

function Component({active}) {
  let fadingClass = 'fading';
  let footerClass = 'footer';
  if (active) {
    fadingClass += ' fading--active';
    footerClass += ' footer--active';
  }

  return(
    <React.Fragment>
      <div className={fadingClass}/>
      <div className={footerClass}>
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
    </React.Fragment>
  );
}

Component.propTypes = {
  active: PropTypes.bool
};

const Footer = memo(Component);

export default Footer