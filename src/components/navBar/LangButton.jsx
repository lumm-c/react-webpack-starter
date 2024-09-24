import React, { useState } from 'react'
import i18n from '@/utils/i18n';
import * as styles from './LangButton.module.scss';
import { log } from '@/utils/log';
import loadChineseFont from '@/utils/loadChineseFont';

const LangButton = ({ }) => {
    // 切換語言選項的函數

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);


    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        if (newLang === 'zh') {
            loadChineseFont();
        }
        i18n.changeLanguage(newLang);
        setCurrentLanguage(newLang);  // 更新語言狀態，觸發重新渲染
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