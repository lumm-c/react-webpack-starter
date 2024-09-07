import React from 'react'
import * as styles from './Logo.module.scss';
import { useTheme } from '@/utils/ThemeContext';
import { log, logLevel } from '@/utils/log';

const Logo = ({ }) => {
    // 使用 require 導入圖片
    const logoDark = require('@/assets/logo_dark.png');
    const logoLight = require('@/assets/logo_light.png');

    const { isDarkMode } = useTheme();

    log(logLevel.DEBUG, 'Logo rendered');


    return (
        <img src={isDarkMode ? logoDark : logoLight}
            alt="Logo" className={styles.img} />
    )
}

export default React.memo(Logo);