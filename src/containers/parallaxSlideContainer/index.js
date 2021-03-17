import './index.css';

export default function ParallaxSlideContainer({ currentSlide, thisSlideNumber, parallaxContent, children}) {
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