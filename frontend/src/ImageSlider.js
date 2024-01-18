import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import car1 from './images/car1.jpg'; 
import car2 from './images/car2.jpg'; 
import car3 from './images/car3.jpg'; 
import car4 from './images/car4.jpg'; 
import car5 from './images/car5.jpg'; 

function ImageSlider() {
    const images = [ 
        car1, car2, car3, car4, car5
      ];
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
    <button className="btn" 
        onClick={goToPrevious}
    >⬅</button>
    <img
      src={images[currentIndex]}
      alt={`Slide ${currentIndex}`}
      width="500" 
      height="400"
      style={{ 
        maxWidth: '100%', // 设置最大宽度为100%
        height: 'auto',  // 高度自动调整
        border: '5px solid brown' 
      }}
    />
    <button className="btn" 
        onClick={goToPrevious}
    >➡</button>
    </div>
  );
}

export default ImageSlider;