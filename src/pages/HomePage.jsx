// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { log, logLevel } from '@/utils/log';
import { useTheme } from '@/utils/ThemeContext';
import * as styles from '@/pages/HomePage.module.scss'; // 使用模塊化的樣式

const HomePage = () => {
    // 使用 useTranslation 取得翻譯函數 t
    const { t, i18n } = useTranslation();
    const { isDarkMode } = useTheme();

    log(logLevel.DEBUG, 'HomePage rendered');

    const backgroundImage = isDarkMode ? require('@/assets/bg/night_image.png') : require('@/assets/bg/day_image.png');

    return (
        <div className={`${styles.homeContainer} ${i18n.language}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t('homepage.title')}</h1>
                <p className={styles.subtitle}>{t('homepage.subtitle')}</p>

                <div className={styles.buttonContainer}>
                    <Link to="/intro" className={
                        `${isDarkMode ? styles.dark_basic_btn : styles.light_basic_btn}`}>
                        {t('homepage.basic_stage')}
                    </Link>
                    <Link to="/portfolio" className={
                        `${isDarkMode ? styles.dark_adv_btn : styles.light_adv_btn}`
                    }>
                        {t('homepage.advanced_stage')}
                    </Link>
                </div>
            </div>
        </div >
    )
};

export default HomePage