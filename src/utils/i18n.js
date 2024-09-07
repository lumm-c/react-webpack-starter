import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import config from '@/utils/config';
import { logLevel } from '@/utils/log';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "Welcome to Panda Park!",
                description: "We are dedicated to protecting pandas and sharing their stories.",
                switch: "Choose Language",
                switch_to_dark: "Switch to Dark Mode",
                switch_to_light: "Switch to Light Mode"
            }
        },
        zh: {
            translation: {
                welcome: "歡迎來到熊貓樂園！",
                description: "我們致力於保護與珍愛熊貓，並與世界分享牠們的故事。",
                switch: "選擇語言",
                switch_to_dark: "切換到深色模式",
                switch_to_light: "切換到淺色模式"
            }
        },
    },
    lng: "en", // 預設語言
    fallbackLng: "en", // 找不到語言時回退語言
    debug: config.featureFlags.enableLogging && config.logLevel === logLevel.DEBUG,  // 只有當 logLevel 設置為 DEBUG 時，啟用 debug 模式
    interpolation: {
        escapeValue: false // React 已經防止了 XSS 攻擊
    },
    useSuspense: false,  // 關閉 Suspense
});

export default i18n;