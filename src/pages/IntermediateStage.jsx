import React from 'react';
import { useTranslation } from 'react-i18next';
import { log, logLevel } from '@/utils/log';
import Button from '@/components/buttons/Button';

const IntermediateStage = () => {

    const { t, i18n } = useTranslation();
    const svgUrl = require('@/assets/buttons/dot.svg');

    log(logLevel.DEBUG, 'IntermediateStage rendered');


    return (
        <div>
            <h1>{t('portfolio.title')} </h1>
            <Button
                type="primary"
                afterContent={svgUrl}
                size="large"
            >
                {t('portfolio.contact')}
            </Button>
        </div>
    )
}

export default IntermediateStage