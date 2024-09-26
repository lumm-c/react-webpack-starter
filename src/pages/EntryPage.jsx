// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { log } from '@/utils/log';
import { useTheme } from '@/utils/ThemeContext';
import * as styles from '@/pages/EntryPage.module.scss'; // 使用模塊化的樣式

const EntryPage = () => {
    // 使用 useTranslation 取得翻譯函數 t
    const { t, i18n } = useTranslation();
    const { isDarkMode } = useTheme();

    log(logLevel.DEBUG, 'EntryPage rendered');

    useEffect(() => {
        // 確認翻譯資料是否加載成功
        const languageData = i18n.getDataByLanguage(i18n.language);  // 獲取當前語言的資料
        console.log('Loaded translation data:', languageData);
    }, []);

    const backgroundImage = isDarkMode ? require('@/assets/bg/night_image.png') : require('@/assets/bg/day_image.png');

    return (
        <div className={`${styles.homeContainer} ${i18n.language}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t('entry.title')}</h1>
                <p className={styles.subtitle}>{t('entry.subtitle')}</p>

                <div className={styles.buttonContainer}>
                    <Link to="/intro" className={styles.basic_btn}>
                        {t('entry.basic_stage')}
                    </Link>
                    <Link to="/portfolio" className={styles.adv_btn}
                    >
                        {t('entry.advanced_stage')}
                    </Link>
                </div>
            </div>
        </div >
    )
};

export default EntryPage