import React from 'react';
import * as styles from './ThemeButton.module.scss';
import { useTheme } from '@/utils/ThemeContext';
import { useTranslation } from 'react-i18next';

const ThemeButton = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { t } = useTranslation();  // 使用 useTranslation Hook 獲取翻譯函數
    return (
        <button
            className={isDarkMode ? styles.dark_theme_btn : styles.light_theme_btn}
            onClick={toggleTheme}>
            {isDarkMode ? t('switch_to_light') : t('switch_to_dark')}
        </button>
    );
}
export default ThemeButton;