//src/components/Layout.jsx
import React, { useMemo } from 'react'
import { Outlet } from 'react-router-dom';
import ThemeButton from '@/components/Buttons/ThemeButton';
import LangButton from '@/components/Buttons/LangButton';
import { useTheme } from '@/utils/ThemeContext'
import Version from '@/components/Version';
import * as styles from '@/components/Layout.module.scss'
import { useTranslation } from 'react-i18next';

const Layout = () => {
    // 使用 useTranslation 取得翻譯函數 t
    const { t } = useTranslation();
    const { isDarkMode } = useTheme();

    // 使用 useMemo 緩存翻譯文本
    const buttonText = useMemo(() => {
        return isDarkMode ? t('dark_mode') : t('light_mode');
    }, [t, isDarkMode]);

    return (
        <div className={`${styles.appContainer}
                ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
            <header>
                <nav>
                    <ThemeButton buttonText={buttonText} />
                    <LangButton />
                </nav>
            </header>
            <main className={styles.mainContent}>
                <Outlet /> {/* 這裡渲染頁面的主要內容 */}
            </main>
            <footer>
                <Version />
            </footer>
        </div>
    )
}

export default Layout