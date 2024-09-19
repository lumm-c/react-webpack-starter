import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { log, logLevel } from '@/utils/log';
import * as styles from '@/pages/Portfolio/Portfolio.module.scss'; // 使用模塊化的樣式
import HeroSection from '@/pages/Portfolio/HeroSection';
import StatsSection from '@/components/Sections/StatsSection';
import ServiceSection from '@/pages/Portfolio/ServiceSection';

const Portfolio = () => {

    const { t, i18n } = useTranslation();

    log(logLevel.DEBUG, 'Portfolio rendered');

    // 定義一個簡單的淡入動畫
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
    };

    return (
        <>
            <HeroSection id="home" />  {/* 添加id到HeroSection */}
            <StatsSection />
            <ServiceSection id="services" />  {/* 這裡添加id到ServiceSection */}
        </>

    )
}

export default Portfolio