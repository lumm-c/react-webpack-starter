import React, { useState } from 'react';
import * as styles from "./APP.module.scss";


const App = () => {
    // 使用 require 導入圖片
    const logoDark = require('@/assets/logo_dark.png');
    const logoLight = require('@/assets/logo_light.png');

    // 使用 useState 管理模式狀態，初始值為 false，表示 Light Mode
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={`${styles.appContainer}
            ${isDarkMode ? styles.darkMode : styles.lightMode}
            `}>
            <img src={isDarkMode ? logoDark : logoLight}
                alt="Logo" className={styles.img} />
            <h1>歡迎來到熊貓樂園</h1>
            <p>在這裡，我們致力於保護與珍愛熊貓，並與世界分享牠們的故事。</p>
            <button onClick={toggleMode}>
                切換到 {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div >
    );
};

export default App;