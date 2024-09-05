import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/utils/i18n';
import ThemeButton from '@/components/ThemeButton';
import LangButton from '@/components/LangButton';
import Logo from '@/components/Logo';
import * as styles from "@/APP.module.scss";
import '@/styles/_language.scss';

const App = () => {

    // 使用 useTranslation 取得翻譯函數 t
    const { t } = useTranslation();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${styles.appContainer}
            ${isDarkMode ? styles.darkMode : styles.lightMode}
            ${i18n.language}
            `}>
            <Logo isDarkMode={isDarkMode} />
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>
            <div>
                <ThemeButton isDarkMode={isDarkMode} toggleMode={toggleMode} />
                <LangButton isDarkMode={isDarkMode} />
            </div>
        </div >
    );
};

export default App;