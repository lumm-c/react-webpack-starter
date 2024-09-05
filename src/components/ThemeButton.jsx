import React from 'react';
import * as styles from './ThemeButton.module.scss';

const ThemeButton = ({ isDarkMode, toggleMode }) => {
    return (
        <button
            className={isDarkMode ? styles.dark_theme_btn : styles.light_theme_btn}
            onClick={toggleMode}>
            切換到 {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}
export default ThemeButton;