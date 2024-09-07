import React from 'react';
import { log, logLevel } from '@/utils/log';

const Version = () => {
    const appVersion = process.env.REACT_APP_VERSION;;

    log(logLevel.DEBUG, 'Version rendered');


    return (
        <div>
            <p>App Version: {appVersion}</p>
        </div>
    );
};

export default React.memo(Version);