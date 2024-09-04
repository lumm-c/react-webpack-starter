import React, { useState } from 'react';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';
import * as styles from "./APP.module.scss";
import './_language.scss';

const App = () => {
    // 使用 require 導入圖片
    const logoDark = require('@/assets/logo_dark.png');
    const logoLight = require('@/assets/logo_light.png');

    // 使用 useState 管理模式狀態，初始值為 false，表示 Light Mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    // 使用 useTranslation 取得翻譯函數 t
    const { t } = useTranslation();
    // 切換語言選項的函數
    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    }

    return (
        <div className={`${styles.appContainer}
            ${isDarkMode ? styles.darkMode : styles.lightMode}
            ${i18n.language}
            `}>

            <img src={isDarkMode ? logoDark : logoLight}
                alt="Logo" className={styles.img} />
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>
            <div>
                <button className={styles.btn} onClick={toggleMode}>
                    切換到 {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button className={styles.btn} onClick={toggleLanguage}>
                    🌐 {i18n.language.toUpperCase()} ▼
                </button>
            </div>
        </div >
    );
};

export default App;