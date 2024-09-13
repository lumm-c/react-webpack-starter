import React from 'react';
import { useTranslation } from 'react-i18next';
import { log, logLevel } from '@/utils/log';
import { useTheme } from '@/utils/ThemeContext';
import Button from '@/components/buttons/Button';

const IntermediateStage = () => {

    const { t, i18n } = useTranslation();
    const { isDarkMode } = useTheme();

    const svgUrl = isDarkMode ? require('@/assets/buttons/dot_dark.svg') : require('@/assets/buttons/dot_light.svg');

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