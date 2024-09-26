//src/components/navBar/Langbutton 

import React, { useState } from 'react'
import * as styles from './LangButton.module.scss';
import { log } from '@/utils/log';
import loadChineseFont from '@/utils/loadChineseFont';
import { useTranslation } from 'react-i18next';


const LangButton = ({ }) => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    // 切換語言選項的函數
    const toggleLanguage = async () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        if (newLang === 'zh') {
            loadChineseFont();
        }
        try {
            await i18n.changeLanguage(newLang);
            setCurrentLanguage(newLang);  // 更新語言狀態，觸發重新渲染

            localStorage.setItem('language', newLang);  // 保存語言偏好到 localStorage
        } catch (err) {
            log(logLevel.ERROR, `Language switch error: ${err}`);
        }
    }

    log(logLevel.DEBUG, 'LangButton rendered');

    return (
        <button className={styles.lang_btn}
            onClick={toggleLanguage}>
            🌐 {currentLanguage.toUpperCase()} ▼
        </button>
    )
}

export default React.memo(LangButton);