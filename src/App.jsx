import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EntryPage from '@/pages/EntryPage';
import BasicStage from '@/pages/BasicStage';
import Layout from '@/components/Layout';
import Portfolio from '@/pages/Portfolio/Portfolio';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<EntryPage />} /> {/* 默認首頁路由 */}
                <Route path="intro" element={<BasicStage />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path="*" element={<div>404 - Page Not Found</div>} /> {/* 通用 404 頁面 */}
            </Route>
        </Routes>
    );
};

export default App;
