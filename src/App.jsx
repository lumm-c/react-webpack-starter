import React from 'react';


const woff2 = require('@/assets/fonts/open-huninn-font/jf-openhuninn.woff2');
const woff = require('@/assets/fonts/open-huninn-font/jf-openhuninn.woff');


const App = () => {
    const logo = require('@/assets/logo.png');  // 使用 require 導入圖片
    const fontFace = `
    @font-face {
      font-family: 'Open Huninn';
      src: url('${woff2}') format('woff2'),
           url('${woff}') format('woff');
      font-weight: normal;
      font-style: normal;
    }`;

    // 動態創建並插入 <style> 標籤
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(fontFace));
    document.head.appendChild(style);

    return (
        <div style={{ fontFamily: 'Open Huninn', textAlign: 'center', margin: '20px' }}>
            <img src={logo} alt="Logo" style={{ width: '150px', height: '150px' }} />
            <h1>歡迎來到熊貓樂園</h1>
            <p>在這裡，我們致力於保護與珍愛熊貓，並與世界分享牠們的故事。</p>
        </div>
    );
};

export default App;