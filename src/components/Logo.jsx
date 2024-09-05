import React from 'react'
import * as styles from './Logo.module.scss';
import { useTheme } from '@/utils/ThemeContext';

const Logo = ({ }) => {
    // 使用 require 導入圖片
    const logoDark = require('@/assets/logo_dark.png');
    const logoLight = require('@/assets/logo_light.png');

    const { isDarkMode } = useTheme();

    return (
        <img src={isDarkMode ? logoDark : logoLight}
            alt="Logo" className={styles.img} />
    )
}

export default Logo