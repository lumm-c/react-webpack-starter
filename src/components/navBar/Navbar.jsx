//src/components/navBar/navBar.jsx 
import React, { useState } from 'react'
import ThemeButton from '@/components/navBar/ThemeButton';
import * as styles from '@/components/navBar/Navbar.module.scss';
import LangButton from '@/components/navBar/LangButton';
import useScrollSpy from '@/utils/useScrollSpy';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制菜單開關
    const [activeLink, setActiveLink] = useState(0); // 控制當前選中的菜單項目

    // 定義選單項目
    const menuItems = [
        { name: 'Home', link: '#home' },
        { name: 'Services', link: '#services' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' }
    ];

    // 切換漢堡菜單的開關狀態
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    // 使用自定義 hook 來監控滾動
    useScrollSpy(setActiveLink);

    // 定義滾動並設置激活狀態的函數
    const handleMenuClick = (e, index, link) => {
        e.preventDefault();  // 防止默認的錨點行為
        setActiveLink(index);  // 設定激活的菜單項目
        handleScroll(link);  // 滾動到對應區塊
    };

    // 定義滾動函數，實現平滑滾動並解決導航欄遮擋問題
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (id === 'home') {
            window.scrollTo({
                top: 0,  // 滾動到頁面最上方
                behavior: 'smooth'  // 平滑滾動效果
            });
        } else {
            const element = document.getElementById(id);
            if (element) {
                // 手動計算滾動位置，避免被導航欄遮擋
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <div className={styles.navbar} >
            {/* 導航欄品牌區域 */}
            <div className={styles.navbar_brand}>
                <a href="/" className="navbar-brand">
                    <div className={styles.navbar_logo} />
                </a>
            </div>

            {/* 側邊菜單區域 */}
            <div className={`${styles.sideMenu} ${isMenuOpen && styles.menuOpen}`}>
                <div className={styles.navbarLinks}>
                    {menuItems.map((item, index) => (
                        <li key={index} >
                            <a
                                href={item.link}
                                className={activeLink === index ? styles.active : ''}
                                onClick={(e) => handleMenuClick(e, index, item.link.substring(1))}  // 呼叫獨立函數
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </div>
                {/* 主題切換按鈕 */}
                <ThemeButton className={styles.themeButton} />
                <LangButton />
            </div>
            {/* 漢堡菜單按鈕 */}
            <button className={styles.hamburgerMenu} onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
        </div >
    )
}

export default Navbar