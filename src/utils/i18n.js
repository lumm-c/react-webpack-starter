import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import config from '@/utils/config';
import { log } from '@/utils/log';

i18n
    .use(HttpApi)  // 使用 i18next-http-backend
    .use(initReactI18next)
    .init({
        lng: "en", // 預設語言
        fallbackLng: "en", // 找不到語言時回退語言
        debug: config.featureFlags.enableLogging && config.logLevel === logLevel.DEBUG,  // 只有當 logLevel 設置為 DEBUG 時，啟用 debug 模式
        interpolation: {
            escapeValue: false, // React 已經防止了 XSS 攻擊
        },
        useSuspense: false,
        backend: {
            loadPath: (languages, namespaces) => {
                const path = `${process.env.REACT_APP_I18N_API_URL}?lang=${languages[0]}`;
                log(logLevel.DEBUG, `Dynamically generated loadPath: ${path}`);  // 打印 loadPath
                return path;
            },

        },
    });

export default i18n;
