import React from 'react';
import * as styles from './ThemeButton.module.scss';
import { useTheme } from '@/utils/ThemeContext';
import { useMemo } from 'react';
import { log, logLevel } from '@/utils/log';


const ThemeButton = ({ buttonText }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    const buttonStyle = useMemo(() => {
        return isDarkMode ? styles.dark_theme_btn : styles.light_theme_btn;
    }, [isDarkMode]);

    log(logLevel.DEBUG, 'ThemeButton rendered');

    return (
        <button
            className={buttonStyle}
            onClick={toggleTheme}>
            {buttonText}
        </button>
    );
}

// 使用 React.memo 防止不必要的重繪
export default React.memo(ThemeButton);