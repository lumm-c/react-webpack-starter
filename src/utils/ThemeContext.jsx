import React, { createContext, useState, useContext } from 'react';

// 創建一個主題上下文
const ThemeContext = createContext();

// ThemeProvider 組件負責提供主題狀態和切換功能
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 自定義 Hook，便於其他組件訪問主題上下文
export const useTheme = () => useContext(ThemeContext);