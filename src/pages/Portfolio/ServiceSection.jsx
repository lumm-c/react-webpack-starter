// src/pages/ServiceSection/ServiceSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@/shared/Cards/Card';
import * as styles from '@/pages/Portfolio/ServiceSection.module.scss';
import CardBorder from '@/shared/Borders/CardBorder';
import { log, logLevel } from '@/utils/log';


const ServiceSection = ({ id }) => {
    const { t } = useTranslation();
    const services = t('cardsData', { returnObjects: true });  // 獲取服務數據

    log(logLevel.DEBUG, 'ServiceSection rendered');

    return (
        <div id={id} className={styles.serviceSection}>
            <div className={styles.titleSection}>
                <h2 className={styles.title}>Services we’re providing
                    that derive 99% result </h2>
                <div className={styles.smileIcon} />
            </div>
            <div className={styles.services}>
                {services.map((service, index) => (
                    <Card
                        key={index}
                        icon={require(`@/assets/icons/${service.icon}`)}
                        title={service.title}
                        description={service.description}
                        category={service.category}
                        details={service.details}
                        borderSVG={<CardBorder strokeColor="var(--text-primary)" fillColor="var(--text-primary)" />}
                    />
                ))}
            </div>

        </div>
    );
};

export default ServiceSection;