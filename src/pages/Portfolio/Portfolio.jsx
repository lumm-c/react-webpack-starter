import React from 'react';
import { log } from '@/utils/log';
import * as styles from '@/pages/Portfolio/Portfolio.module.scss'; // 使用模塊化的樣式
import HeroSection from '@/pages/Portfolio/HeroSection';
import StatsSection from '@/components/Sections/StatsSection';
import ServiceSection from '@/pages/Portfolio/ServiceSection';
import ProjectSection from '@/pages/Portfolio/ProjectSection';

const Portfolio = () => {

    log(logLevel.DEBUG, 'Portfolio rendered');

    return (
        <>
            <HeroSection id="home" />
            <StatsSection />
            <ServiceSection id="services" />
            <ProjectSection id="projects" />
        </>

    )
}

export default Portfolio