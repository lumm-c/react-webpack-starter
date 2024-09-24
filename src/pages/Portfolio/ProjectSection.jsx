// src/pages/Portfolio/ProjectSection.jsx
import React, { useState } from 'react';
import * as styles from '@/pages/Portfolio/ProjectSection.module.scss';
import { Trans, useTranslation } from 'react-i18next';
import Swiper from '@/shared/Swiper/Swiper';


const ProjectSection = ({ id }) => {
    const { t, i18n } = useTranslation();
    const projectData = t('projectData', { returnObjects: true });  // 獲取服務數據


    return (
        <div id={id} className={`${styles.projectContainer} ${i18n.language}`}>
            <div className={styles.titleSection}>
                <h2 className={styles.title}>My Projects</h2>
                <img src={require(`@/assets/icons/JS.png`)} />
            </div>
            <Swiper
                items={projectData}
                loop={false}           // 支援無限循環
                autoplay={false}       // 自動播放
                delay={4000}          // 延遲 4 秒切換
                direction="horizontal"  // 水平滑動
                onSlideChange={(currentIndex) => {
                    console.log(`Active slide is: ${currentIndex + 1}`);
                }}
            />
        </div>
    );
};

export default ProjectSection;