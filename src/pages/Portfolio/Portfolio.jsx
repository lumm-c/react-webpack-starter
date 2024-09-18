import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { log, logLevel } from '@/utils/log';
import Button from '@/components/buttons/Button';
import * as styles from '@/pages/Portfolio/Portfolio.module.scss'; // 使用模塊化的樣式
import { motion } from 'framer-motion'; // 引入 Framer Motion
import StatsSection from '@/components/Cards/StatsSection';
import ComputerIcon from '@/components/Icons/ComputerIcon';
import Border from '@/components/Icons/Border';
import Tooltip from '@/components/Tooltip/Tooltip';

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
            <div className={`${styles.heroContainer} ${i18n.language}`} data-lang={i18n.language}>
                <div className={styles.heroContent}>
                    <ComputerIcon strokeColor="var(--text-primary)" fillColor="var(--text-primary)" strokeWidth={0.5} />
                    <motion.h1
                        className={styles.heroTitle}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <Trans i18nKey="portfolio.title">
                            I craft <span className={styles.highlight}>beautiful</span> websites 💻 with love.
                        </Trans>
                    </motion.h1>
                    <Button
                        type="primary"
                        afterContent={require('@/assets/buttons/dot.svg')}
                        size="large"
                    >
                        {t('portfolio.contact')}
                    </Button>
                </div >
                <div className={styles.imageContainer}>
                    <Tooltip text="Meet Carol </>">
                        <img className={styles.heroImage} src={require('@/assets/portfolio/heroimage.png')} alt="Meet Carol" />
                        <Border className={styles.borderSVG} strokeColor="var(--text-primary)" fillColor="var(--text-primary)" strokeWidth={0.5} />
                    </Tooltip>
                </div>
            </div>
            <StatsSection />
        </>

    )
}

export default Portfolio