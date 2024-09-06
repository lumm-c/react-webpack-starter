import React from 'react';
import * as styles from './ThemeButton.module.scss';
import { useTheme } from '@/utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const ThemeButton = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { t } = useTranslation();  // 使用 useTranslation Hook 獲取翻譯函數

    const buttonStyle = useMemo(() => {
        return isDarkMode ? styles.dark_theme_btn : styles.light_theme_btn;
    }, [isDarkMode]);

    if (process.env.NODE_ENV !== 'production') {
        console.log('ThemeButton rendered');
    }
    return (
        <button
            className={buttonStyle}
            onClick={toggleTheme}>
            {isDarkMode ? t('switch_to_light') : t('switch_to_dark')}
        </button>
    );
}

// 使用 React.memo 防止不必要的重繪
export default React.memo(ThemeButton);