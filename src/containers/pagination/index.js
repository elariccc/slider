import { MAX_PAGE, MIN_PAGE } from '../../constants/index';

import './index.css';

export default function Pagination({currentSlide}) {
  const pageCircles = [];

  for (let i = MIN_PAGE; i <= MAX_PAGE; i++) {
    let pageCircleClass = 'page-circle';

    if (i === currentSlide) pageCircleClass += ' page-circle--active';

    pageCircles.push(<div className={pageCircleClass} key={i}/>);
  }

  return (
    <div className='pagination-container'>
      <div className='pagination__menu'>
        {pageCircles}
      </div>
    </div>
  );
}