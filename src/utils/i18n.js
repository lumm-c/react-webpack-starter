import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from 'i18next-http-backend';
import config from '@/utils/config';
import { log } from '@/utils/log';

let instance = null;

const createI18nInstance = () => {
    if (!instance) {
        console.log("createI18nInstance");

        // 支援的語言
        const supportedLanguages = ['en', 'zh'];

        // 從 localStorage 或瀏覽器語言檢測得到用戶的語言
        let defaultLanguage = localStorage.getItem('language') || navigator.language.split('-')[0];

        // 檢查是否支援該語言，否則預設為英文
        if (!supportedLanguages.includes(defaultLanguage)) {
            defaultLanguage = 'en';
        }

        // 保存語言到 localStorage，以便下次訪問時使用
        localStorage.setItem('language', defaultLanguage);

        i18n
            .use(Backend)  // 使用 i18next-http-backend
            .use(initReactI18next)
            .init({
                lng: defaultLanguage, // 預設語言
                fallbackLng: "en", // 找不到語言時回退語言
                debug: config.featureFlags.enableLogging && config.logLevel === logLevel.DEBUG,  // 只有當 logLevel 設置為 DEBUG 時，啟用 debug 模式
                interpolation: {
                    escapeValue: false, // React 已經防止了 XSS 攻擊
                },
                useSuspense: false,
                backend: {
                    backends: [
                        LocalStorageBackend,  // primary backend
                        HttpApi               // fallback backend
                    ],
                    backendOptions: [{
                        /* options for primary backend */
                        enabled: true,  // 啟用快取
                        prefix: 'i18next_res_',  // prefix for stored languages
                        versions: { en: 'v1.0', zh: 'v1.0' },  // 版本控制快取
                        expirationTime: 7 * 24 * 60 * 60 * 1000,  // 7天後過期
                        store: typeof window !== 'undefined' ? window.localStorage : null
                    }, {
                        /* options for secondary backend */
                        loadPath: (languages, namespaces) => {
                            const path = `${process.env.REACT_APP_I18N_API_URL}?lang=${languages[0]}`;
                            log(logLevel.DEBUG, `Dynamically generated loadPath: ${path}`);  // 打印 loadPath
                            return path;
                        },
                        crossDomain: true,
                    }],
                },
            });
        instance = i18n;
    }
    return instance;

};

export default createI18nInstance;
