import React from 'react';
import * as styles from "./APP.module.css";


const App = () => {
    const logo = require('@/assets/logo.png');  // 使用 require 導入圖片

    return (
        <div className={styles.appContainer}>
            <img src={logo} alt="Logo" className={styles.img} />
            <h1>歡迎來到熊貓樂園</h1>
            <p>在這裡，我們致力於保護與珍愛熊貓，並與世界分享牠們的故事。</p>
        </div>
    );
};

export default App;