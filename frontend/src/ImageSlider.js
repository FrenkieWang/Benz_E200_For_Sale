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
    <div style={{ 
      display: 'flex', // 使用flex布局
      alignItems: 'center', // 垂直居中对齐子元素
      justifyContent: 'center', // 水平居中对齐子元素
      width: '90%', // 容器宽度为100%
      maxWidth: '500px', // 设置最大宽度以适应图片
      margin: 'auto' // 自动外边距用于居中整个容器
    }}>
    <button className="btn" 
        onClick={goToPrevious}
    >⬅</button>
    <img
      src={images[currentIndex]}
      alt={`Slide ${currentIndex}`}
      width="300" 
      height="200"
      style={{ 
        maxWidth: '100%', // 图片最大宽度为100%，允许它在容器内缩放
        height: 'auto', // 高度自动调整
        border: '5px solid brown',
        margin: '0 10px' // 添加水平间隔
      }}
    />
    <button className="btn" 
        onClick={goToPrevious}
    >➡</button>
    </div>
  );
}

export default ImageSlider;