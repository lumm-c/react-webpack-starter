import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import BasicStage from '@/pages/BasicStage';
import Layout from '@/components/Layout';
import IntermediateStage from '@/pages/IntermediateStage';

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} /> {/* 默認首頁路由 */}
                <Route path="intro" element={<BasicStage />} />
                <Route path='portfolio' element={<IntermediateStage />} />
                <Route path="*" element={<div>404 - Page Not Found</div>} /> {/* 通用 404 頁面 */}
            </Route>
        </Routes>
    );
};

export default App;
