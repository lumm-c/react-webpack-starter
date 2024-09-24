// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/utils/logLevel';  // 只需在 log.js 中引入 logLevel
import '@/utils/i18n'; // 确保 i18n 初始化在应用渲染之前
import App from '@/App';
import { ThemeProvider } from '@/utils/ThemeContext';
import '@/styles/_global.scss' // 引入全局樣式

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);