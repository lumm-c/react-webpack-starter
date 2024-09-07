// config.js
import { logLevel } from '@/utils/log';

const config = {
    logLevel: logLevel.DEBUG,  // 日誌級別
    featureFlags: {
        enableLogging: true, // 根據這個配置決定是否啟用日誌
    }
};

export default config;