import React from 'react';

const Version = () => {
    const appVersion = process.env.REACT_APP_VERSION;;

    if (process.env.NODE_ENV !== 'production') {
        console.log('Version rendered');
    }

    return (
        <div>
            <p>App Version: {appVersion}</p>
        </div>
    );
};

export default React.memo(Version);