// config.js
const config = {
    logLevel: logLevel.DEBUG,  // 日誌級別
    featureFlags: {
        enableLogging: process.env.NODE_ENV !== 'production', // 根據這個配置決定是否啟用日誌
    }
};

export default config;
