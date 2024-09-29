import React from 'react';
import { useTranslation } from 'react-i18next';
import * as styles from './ContactSection.module.scss';
import ContactForm from '@/components/Form/ContactForm';

const ContactSection = ({ id }) => {
    const { t } = useTranslation();  // 引入翻譯函數

    return (
        <div id={id} className={styles.subcontainer}>
            <div className={styles.infoSection}>
                <h2 className={styles.title}>{t('collaborate.title')}</h2>
                <p className={styles.description}>
                    {t('collaborate.description')}
                </p>
                <div className={styles.infoBox}>
                    <div className={styles.infoItem}>
                        <img src={require(`@/assets/icons/Open.svg`)} alt="Open" className={styles.icon} />
                        <div>
                            <div className={styles.infoTitle}>{t('collaborate.businessHours')}</div>
                            <div className={styles.description}>{t('collaborate.hours')}</div>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <img src={require(`@/assets/icons/Newsletter.svg`)} alt="Email" className={styles.icon} />
                        <div>
                            <div className={styles.infoTitle}>{t('collaborate.email')}</div>
                            <div className={styles.description}>carol.cheng@luma-c.com</div>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <img src={require(`@/assets/icons/LINE.svg`)} alt="Chat" className={styles.icon} />
                        <div>
                            <div className={styles.infoTitle}>{t('collaborate.lineId')}</div>
                            <div className={styles.description}> @430trfzv</div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactSection