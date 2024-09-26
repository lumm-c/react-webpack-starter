// log.js
import config from '@/utils/config';

export const log = (level, message) => {    // 檢查是否啟用了日誌功能
    if (!config.featureFlags.enableLogging) {
        return;
    }
    // 檢查當前的日誌等級，只有當前設定的等級及以上的日誌才會輸出
    if (level <= config.logLevel) {
        if (level === logLevel.ERROR) {
            console.error(message)
        } else if (level === logLevel.WARN) {
            console.warn(message)
        } else if (level === logLevel.DEBUG) {
            console.debug(`%cDebug:  ${message}`, 'color: blue;')
        } else {
            console.log(`%cInfo: ${message}`, 'color: green;');
        }
    }
};