import React from 'react';

import Pulsar from '../pulsar';

export default function slide1ParallaxContent() {
  return (
    <React.Fragment>
      <img 
        src='./images/1.text--parallax.png' 
        alt='iceberg_top_text'
      />
      <Pulsar top={260} left={561} size={50}/>
      <Pulsar top={423} left={270} size={30}/>
      <Pulsar top={535} left={478} size={15}/>
      <Pulsar top={514} left={819} size={17}/>
    </React.Fragment>
  );
};