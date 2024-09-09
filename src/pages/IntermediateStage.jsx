import React from 'react';
import { log, logLevel } from '@/utils/log';

const IntermediateStage = () => {

    log(logLevel.DEBUG, 'IntermediateStage rendered');

    return (
        <div>
            <h1>Intermediate Stage</h1>
            <p>歡迎來到中階段的開發過程，我們會在此進一步完成你的作品集。</p>
        </div>
    )
}

export default IntermediateStage