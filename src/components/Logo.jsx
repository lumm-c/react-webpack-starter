import React from 'react'
import * as styles from './Logo.module.scss';

const Logo = ({ isDarkMode }) => {
    // 使用 require 導入圖片
    const logoDark = require('@/assets/logo_dark.png');
    const logoLight = require('@/assets/logo_light.png');

    return (
        <img src={isDarkMode ? logoDark : logoLight}
            alt="Logo" className={styles.img} />
    )
}

export default Logo