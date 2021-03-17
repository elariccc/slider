import './index.css';

export default function Pulsar({top, left, size}) {
  const pulsarStyle = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}px`,
    left: `${left}px`,
  }

  console.log(pulsarStyle);

  return (
    <div 
      className='pulsar-container'
      style={pulsarStyle}
    >
      <div className='circle circle--still'/>
      <div className='circle circle--pulsing'/>
      <div className='circle circle--pulsing-delayed'/>
    </div>
  );
}
