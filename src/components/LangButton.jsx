import React from 'react'
import i18n from '@/utils/i18n';
import * as styles from './LangButton.module.scss';
import { useTheme } from '@/utils/ThemeContext';
import { log, logLevel } from '@/utils/log';

const LangButton = ({ }) => {
    // 切換語言選項的函數
    const { isDarkMode } = useTheme();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    }

    log(logLevel.DEBUG, 'LangButton rendered');

    return (
        <button
            className={isDarkMode ? styles.dark_lang_btn : styles.light_lang_btn}
            onClick={toggleLanguage}>
            🌐 {i18n.language.toUpperCase()} ▼
        </button>
    )
}

export default React.memo(LangButton);