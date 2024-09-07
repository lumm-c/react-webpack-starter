import React, { useMemo } from 'react';
import ThemeButton from '@/components/ThemeButton';
import LangButton from '@/components/LangButton';
import Logo from '@/components/Logo';
import Version from './components/Version';
import { useTheme } from '@/utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import * as styles from "@/APP.module.scss";
import { log, logLevel } from '@/utils/log';

const App = () => {

    // 使用 useTranslation 取得翻譯函數 t
    const { t, i18n, ready } = useTranslation();
    const { isDarkMode } = useTheme();

    // 使用封裝的日誌工具，並使用 logLevel 常量來傳遞日誌等級
    log(logLevel.DEBUG, 'App rendered: ' + ready);

    // 使用 useMemo 缓存翻译文本
    const buttonText = useMemo(() => {
        return isDarkMode ? t('switch_to_light') : t('switch_to_dark');
    }, [t, isDarkMode]);

    return (
        <div className={`${styles.appContainer}
                ${isDarkMode ? styles.darkMode : styles.lightMode}
                ${i18n.language}`}>
            <Logo />
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>
            <div>
                <ThemeButton buttonText={buttonText} />
                <LangButton />
                <Version />
            </div>
        </div >
    );
};

export default App;