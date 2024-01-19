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
      width: '70%', // 容器宽度为100%
      maxWidth: '500px', // 设置最大宽度以适应图片
      margin: 'auto' // 自动外边距用于居中整个容器
    }}>
    <button className="btn" 
        onClick={goToPrevious}
        style={{ 
          border: '5px solid black', // 5像素黑色实线边框
          backgroundColor: 'white', // 白色背景
          color: 'black', // 黑色文字
          cursor: 'pointer', // 鼠标悬停时的光标样式
          outline: 'none', // 移除焦点时的轮廓
        }}
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
        margin: '10 10px' // 添加水平间隔
      }}
    />
    <button className="btn" 
        onClick={goToNext}
        style={{ 
          border: '5px solid black', // 5像素黑色实线边框
          backgroundColor: 'white', // 白色背景
          color: 'black', // 黑色文字
          cursor: 'pointer', // 鼠标悬停时的光标样式
          outline: 'none', // 移除焦点时的轮廓
        }}
    >➡</button>
    </div>
  );
}

export default ImageSlider;