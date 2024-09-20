import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { log, logLevel } from '@/utils/log';
import Button from '@/shared/Buttons/Button';
import * as styles from '@/pages/Portfolio/HeroSection.module.scss'; // 使用模塊化的樣式
import { motion } from 'framer-motion'; // 引入 Framer Motion
import ComputerIcon from '@/shared/Icons/ComputerIcon';
import Border from '@/shared/Borders/Border';
import Tooltip from '@/shared/Tooltips/Tooltip';

const HeroSection = ({ id }) => {   // 接收 id prop
    const { t, i18n } = useTranslation();

    log(logLevel.DEBUG, 'Portfolio rendered');

    // 定義一個簡單的淡入動畫
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
    };

    return (
        <div id={id}
            className={`${styles.heroContainer} ${i18n.language}`}
            data-lang={i18n.language}> {/* 將 id 傳遞到根元素 */}

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
    )
}

export default HeroSection