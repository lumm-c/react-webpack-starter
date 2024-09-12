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
                dark_mode: "🌙 Dark Mode",
                light_mode: "🌤️ Light Mode",
                homepage: {
                    title: "Welcome to Adventure",
                    subtitle: "Pick your stage",
                    basic_stage: "📚 Basic Stage",
                    advanced_stage: "🚀 Advanced Stage",
                },
                portfolio: {
                    title: "I craft beautiful websites 💻 with love.",
                    contact: "Contact me",
                }
            }
        },
        zh: {
            translation: {
                welcome: "歡迎來到熊貓樂園！",
                description: "我們致力於保護與珍愛熊貓，並與世界分享牠們的故事。",
                switch: "選擇語言",
                dark_mode: "🌙 深色模式",
                light_mode: "🌤️ 淺色模式",
                homepage: {
                    title: "歡迎來到冒險世界",
                    subtitle: "選擇你的挑戰階段",
                    basic_stage: "📚 基礎階段",
                    advanced_stage: "🚀 進階階段",
                },
                portfolio: {
                    title: "我用心打造精美的網站 💻",
                    contact: "聯絡我",
                }
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