import React, { useState } from 'react';

import styled from 'styled-components';
import YouTube from 'react-youtube';

import 'bootstrap/dist/css/bootstrap.min.css';

import compare1 from './images/compare1.jpg'; 
import compare2 from './images/compare2.jpg'; 
import NCT_Tax from './images/NCT_Tax.jpg'; 
import WeChat from './images/WeChat.jpg';
import WhatsApp from './images/WhatsApp.jpg';

import ImageSlider from './ImageSlider';

const ResponsiveYouTubeContainer = styled.div`
  width: 100%;
  margin-left: 0;
  margin-right: 0; 

  /* 对于小屏幕（如智能手机） */
  @media (max-width: 767px) {
    width: 90%; // 小屏幕上的宽度为90%
    max-width: 320px; // 或其他合适的最大宽度
  }

  /* 对于中等尺寸屏幕（例如平板电脑） */
  @media (min-width: 768px) {
    width: 70%; // 中等屏幕上的宽度为70%
    max-width: 640px;
  }

  /* 对于大屏幕 */
  @media (min-width: 1024px) {
    width: 50%; // 大屏幕上的宽度为50%
    max-width: 960px;
  }
`;

function App() {
  const [language, setLanguage] = useState('zh'); // 默认为英文

  function toggleLanguage() {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  }

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    height: '200',
    width: '320',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="App" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      height: 'auto', // 修改为auto，以适应内容高度
      overflow: 'auto',
      padding: '20px' // 添加一些内边距
    }}>
      <h3 style = {{color : 'brown'}}>
        {language === 'en' ? 'Mercedes Benz E200 Kompressor' : '出二手 奔驰 E200 Kompressor'}
      </h3>
      <button 
        onClick={toggleLanguage}
        style={{
          backgroundColor: 'brown', // 灰色背景
          color: 'white', // 棕色文字
          borderColor: 'black', // 棕色边框
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        {language === 'en' ? '切换到中文' : 'Switch to English'}
      </button>
      <br />
      <p style = {{color : 'brown' , borderStyle: 'solid', borderWidth: '3px', borderColor: 'brown', padding: '5px'}}>
        {language === 'en' ? (
          <>
            Fujiwara's <b>Nightmare</b> <br /> Suzuki's <b>Favourite</b>
          </>
        ) : (
          <>
            藤原拓海的<b>噩梦</b> <br /> 茂木夏树的<b>最爱</b>
          </>
        )}
      </p>
      <h2 style = {{color : 'brown'}}>
        {language === 'en' ? 'Car Image ' : '汽车图片'}
      </h2>
      <img src={compare1} alt="Description" width="300" height="400" />
      <img src={compare2} alt="Description" width="300" height="400" />
      <ImageSlider />
      <h3 style = {{color : 'brown'}}>
        {language === 'en' ? 'NCT and Road Tax -- Still Valid!' : '车检 + 路税 -- 还没有过期！'}
      </h3>
      <img src={NCT_Tax} alt="Description" width="300" height="200"/>
      <h3 style = {{color : 'brown'}}>
        {language === 'en' ? ' Animation Review -- Initial D' : '头文字D 经典动画回顾'}
      </h3>
      <ResponsiveYouTubeContainer>
        <YouTube videoId="-OTUgn_RVzo" opts={opts} />
      </ResponsiveYouTubeContainer>
      <h3 style = {{color : 'brown'}}>
        {language === 'en' ? 'Initial Price : Only 2000 Euro ' : '初始价: 只要2000欧'}
      </h3>
      <h4> {language === 'en' ? 'Please Contact: Gavin ' : '请联系Gavin'}</h4>
      {language === 'en' ? 
         <img src={WhatsApp} alt="Description" width="400" height="400"/> : 
         <img src={WeChat} alt="Description" width="400" height="400"/>}
      <button 
          onClick={toggleLanguage}
          style={{
            backgroundColor: 'brown', // 灰色背景
            color: 'white', // 棕色文字
            borderColor: 'black', // 棕色边框
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          {language === 'en' ? '切换到中文' : 'Switch to English'}
        </button>
    </div>
  );
}

export default App;
