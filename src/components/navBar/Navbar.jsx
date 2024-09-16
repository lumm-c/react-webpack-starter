//src/components/navBar/navBar.jsx 

import React, { useState } from 'react'
import { useTheme } from '@/utils/ThemeContext'
import ThemeButton from '@/components/buttons/ThemeButton';
import * as styles from '@/components/navBar/Navbar.module.scss';
import LangButton from '@/components/buttons/LangButton';


const Navbar = () => {
    const { isDarkMode } = useTheme();  // 獲取當前主題狀態
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制菜單開關
    const [activeLink, setActiveLink] = useState(0); // 控制當前選中的菜單項目

    // 定義選單項目
    const menuItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Services', link: '#services' },
        { name: 'Contact', link: '#contact' }
    ];

    // 切換漢堡菜單的開關狀態
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 根據主題模式選擇 logo
    const logo_light = require('@/assets/logo_light.svg');
    const logo_dark = require('@/assets/logo_dark.svg');

    return (
        <div className={styles.navbar} >
            {/* 導航欄品牌區域 */}
            <div className={styles.navbar_brand}>
                <a href="/" className="navbar-brand">
                    <img src={`${isDarkMode ? logo_dark : logo_light}`
                    } alt="Luma Logo" />
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
                                onClick={() => setActiveLink(index)}
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