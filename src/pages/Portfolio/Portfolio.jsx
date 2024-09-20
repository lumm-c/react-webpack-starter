import React from 'react';
import { log, logLevel } from '@/utils/log';
import * as styles from '@/pages/Portfolio/Portfolio.module.scss'; // 使用模塊化的樣式
import HeroSection from '@/pages/Portfolio/HeroSection';
import StatsSection from '@/components/Sections/StatsSection';
import ServiceSection from '@/pages/Portfolio/ServiceSection';

const Portfolio = () => {

    log(logLevel.DEBUG, 'Portfolio rendered');

    return (
        <>
            <HeroSection id="home" />  {/* 添加id到HeroSection */}
            <StatsSection />
            <ServiceSection id="services" />  {/* 這裡添加id到ServiceSection */}
        </>

    )
}

export default Portfolio