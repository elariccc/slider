import { memo } from 'react';
import PropTypes from 'prop-types';

import './next-page.css';

function Component({active}) {
  let className = 'next-page';
  if (active) className += ' next-page--active';
  
  return (
    <img 
      src='./images/next-page.png' 
      alt='next_page_bar'
      className={className}
    />
  );
}

Component.propTypes = {
  active: PropTypes.bool
};

const NextPage = memo(Component);

export default NextPage