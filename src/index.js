import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/utils/i18n'; // 确保 i18n 初始化在应用渲染之前
import App from './App';
import { ThemeProvider } from '@/utils/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);