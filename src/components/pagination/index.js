import { memo } from 'react';
import PropTypes from 'prop-types';

import { MAX_PAGE, MIN_PAGE } from '../../constants/index';

import './pagination.css';

function Component({currentSlide}) {
  const pageCircles = [];

  for (let i = MIN_PAGE; i <= MAX_PAGE; i++) {
    let pageCircleClass = 'pagination__circle';

    if (i === currentSlide) pageCircleClass += ' pagination__circle--active';

    pageCircles.push(<div className={pageCircleClass} key={i}/>);
  }

  return (
    <div className='pagination'>
      <div className='pagination__menu'>
        {pageCircles}
      </div>
    </div>
  );
}

Component.propTypes = {
  currentSlide: PropTypes.number,
}

const Pagination = memo(Component);

export default Pagination