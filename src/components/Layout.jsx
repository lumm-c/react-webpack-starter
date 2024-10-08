//src/components/Layout.jsx
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import LangButton from '@/components/navBar/LangButton';
import Version from '@/components/Version';
import * as styles from '@/components/Layout.module.scss'
import Navbar from '@/components/navBar/Navbar';
import ThemeButton from '@/components/navBar/ThemeButton';
import { useLocation } from 'react-router-dom'; // 引入 useLocation
import ReactGA from 'react-ga4';

const Layout = () => {

    const location = useLocation(); // 獲取當前路徑

    useEffect(() => {
        // 每次路由變更時，發送頁面瀏覽事件
        const path = location.pathname + location.search;
        ReactGA.send({ hitType: 'pageview', page: path });

    }, [location]);

    const isAdvancedPage = location.pathname === '/portfolio';
    return (
        <div className={styles.appContainer}>
            <header>
                {isAdvancedPage ? <Navbar /> : <ThemeButton />}
            </header>
            <main className={styles.mainContent}>
                <Outlet /> {/* 這裡渲染頁面的主要內容 */}
            </main>
            <footer>
                {!isAdvancedPage &&
                    <div className={styles.footer_menu}>
                        <LangButton />
                        <Version />
                    </div>
                }
            </footer>
        </div>
    )
}

export default Layout