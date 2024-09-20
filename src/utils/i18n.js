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
                    title: "I craft <1>beautiful</1><br /> and functional websites 💻 with love.",
                    contact: "Contact me",
                },
                cardsData: [
                    {
                        icon: "React.png",
                        title: "Frontend Developer",
                        description: "Building engaging, responsive websites that transform ideas into seamless user experiences.",
                        category: "Languages",
                        details: "JavaScript (ES6+), TypeScript, HTML, CSS, Sass"
                    },
                    {
                        icon: "Figma.png",
                        title: "UI/UX Designer",
                        description: "Crafting user-centered designs balancing aesthetics and functionality for optimal usability.",
                        category: "Tools",
                        details: "Figma, Photoshop, Prototyping"
                    },
                    {
                        icon: "Training.png",
                        title: "Mentor",
                        description: "Guiding developers and designers with practical insights and real-world project experience.",
                        category: "Specializations",
                        details: "Code Reviews, Problem-Solving, Career Guidance"
                    }
                ]
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
                    title: "我專注於打造<1>精美</1><br /> 且符合需求的網站 💻。",
                    contact: "聯絡我",
                },
                cardsData: [
                    {
                        icon: "React.png",
                        title: "前端開發者",
                        description: "構建引人入勝的響應式網站，將想法轉化為無縫的用戶體驗。",
                        category: "語言",
                        details: "JavaScript (ES6+), TypeScript, HTML, CSS, Sass"
                    },
                    {
                        icon: "Figma.png",
                        title: "UI/UX 設計師",
                        description: "創造以用戶為中心的設計，平衡美觀與功能性，實現最佳可用性。",
                        category: "工具",
                        details: "Figma, Photoshop, Prototyping"
                    },
                    {
                        icon: "Training.png",
                        title: "導師",
                        description: "為開發者和設計師提供實用的建議和實際項目經驗。",
                        category: "專業",
                        details: "代碼審查、問題解決、職業指導"
                    }
                ]
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