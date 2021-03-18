import { memo } from 'react';
import PropTypes from 'prop-types';

import './pulsar.css';

function Component({top, left, size}) {
  const pulsarStyle = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}px`,
    left: `${left}px`,
  }

  return (
    <div 
      className='pulsar'
      style={pulsarStyle}
    >
      <div className='pulsar__circle pulsar__circle--still'/>
      <div className='pulsar__circle pulsar__circle--pulsing'/>
      <div className='pulsar__circle pulsar__circle--pulsing-delayed'/>
    </div>
  );
}

Component.propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  size: PropTypes.number,
};

const Pulsar = memo(Component);

export default Pulsar