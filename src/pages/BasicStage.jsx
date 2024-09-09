import React from 'react';
import Logo from '@/components/Logo';
import { useTranslation } from 'react-i18next';
import { log, logLevel } from '@/utils/log';

const BasicStage = () => {
    // 使用 useTranslation 取得翻譯函數 t
    const { t, i18n, ready } = useTranslation();

    // 使用封裝的日誌工具，並使用 logLevel 常量來傳遞日誌等級
    log(logLevel.DEBUG, 'BasicStage rendered: ' + ready);

    return (
        <div className={`${i18n.language}`}>
            <Logo />
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>
        </div >
    );
};

export default BasicStage;