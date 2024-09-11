// src/utils/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// 創建一個主題上下文
const ThemeContext = createContext();

// ThemeProvider 組件負責提供主題狀態和切換功能
export const ThemeProvider = ({ children }) => {
    // 預設主題狀態（可以從 localStorage 讀取之前的主題選擇）
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // 優先從 localStorage 中讀取主題設置，否則預設為 false (light-mode)
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    // 當主題變更時，應用對應的主題類名到 body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
        // 同時將主題狀態保存到 localStorage
        localStorage.setItem('theme', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    // 切換主題狀態
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 自定義 Hook，便於其他組件訪問主題上下文
export const useTheme = () => useContext(ThemeContext);