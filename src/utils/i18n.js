import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "Welcome to Panda Park!",
                description: "We are dedicated to protecting pandas and sharing their stories.",
                switch: "Choose Language",
                switch_to_dark: "Switch to Dark Mode", // 新增這行
                switch_to_light: "Switch to Light Mode" // 新增這行
            }
        },
        zh: {
            translation: {
                welcome: "歡迎來到熊貓樂園！",
                description: "我們致力於保護與珍愛熊貓，並與世界分享牠們的故事。",
                switch: "選擇語言",
                switch_to_dark: "切換到深色模式",  // 新增這行
                switch_to_light: "切換到淺色模式"  // 新增這行
            }
        },

    },
    lng: "en", // 預設語言
    fallbackLng: "en", // 找不到語言時回退語言
    interpolation: {
        escapeValue: false // React 已經防止了 XSS 攻擊
    }
});

export default i18n;