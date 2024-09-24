import React from 'react';
import * as styles from './ThemeButton.module.scss';
import { useTheme } from '@/utils/ThemeContext';
import { log } from '@/utils/log';


const ThemeButton = ({ }) => {
    const { isDarkMode, toggleTheme } = useTheme();


    log(logLevel.DEBUG, 'ThemeButton rendered');

    return (
        <button
            className={styles.toggleTheme}
            onClick={toggleTheme}>
            {isDarkMode ? '🌙' : '☀️'}
        </button>
    );
}

// 使用 React.memo 防止不必要的重繪
export default React.memo(ThemeButton);