import React from 'react';
import { log } from '@/utils/log';
import * as styles from '@/pages/Portfolio/Portfolio.module.scss'; // 使用模塊化的樣式
import HeroSection from '@/pages/Portfolio/HeroSection';
import StatsSection from '@/components/Sections/StatsSection';
import ServiceSection from '@/pages/Portfolio/ServiceSection';
import ProjectSection from '@/pages/Portfolio/ProjectSection';
import ContactSection from '@/pages/Portfolio/ContactSection';

const Portfolio = () => {

    log(logLevel.DEBUG, 'Portfolio rendered');

    return (
        <>
            <HeroSection id="home" />
            <StatsSection />
            <ServiceSection id="services" />
            <ProjectSection id="projects" />
            <ContactSection id="contact" />
        </>

    )
}

export default Portfolio