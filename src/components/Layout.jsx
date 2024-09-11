//src/components/Layout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom';
import LangButton from '@/components/buttons/LangButton';
import Version from '@/components/Version';
import * as styles from '@/components/Layout.module.scss'
import Navbar from '@/components/navBar/Navbar';
import { useTheme } from '@/utils/ThemeContext'
import { Link, useLocation } from 'react-router-dom'; // 引入 useLocation
import ThemeButton from '@/components/buttons/ThemeButton';

const Layout = () => {
    const { isDarkMode } = useTheme();
    const location = useLocation(); // 獲取當前路徑

    const isAdvancedPage = location.pathname === '/portfolio';
    return (
        <div className={`${styles.appContainer}
                ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
            <header>
                {isAdvancedPage ? <Navbar /> : <ThemeButton />}
            </header>
            <main className={styles.mainContent}>
                <Outlet /> {/* 這裡渲染頁面的主要內容 */}
            </main>
            <footer>
                <div className={styles.footer_menu}>
                    <LangButton />
                    <Version />
                </div>
            </footer>
        </div>
    )
}

export default Layout