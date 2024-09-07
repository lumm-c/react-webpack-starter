//src/utils/loadChineseFont.js
import { log, logLevel } from '@/utils/log';

const loadChineseFont = async () => {
    const isLoaded = await document.fonts.load('1em Open Huninn');

    if (isLoaded.length > 0) {
        log(logLevel.INFO, 'Chinese font already loaded.');
        return;
    }
    try {
        const fontPath = await import('@/assets/fonts/open-huninn-font/jf-openhuninn.woff2');

        const font = new FontFace('Open Huninn', `url(${fontPath.default})`, {
            weight: 'normal',
            style: 'normal',
            display: 'swap',
        });
        log(logLevel.DEBUG, fontPath.default);
        await font.load();
        document.fonts.add(font);
        log(logLevel.INFO, 'Chinese font loaded successfully.');
    } catch (error) {
        log(logLevel.ERROR, 'Error loadChineseFont:', error);
    }
};

export default loadChineseFont;
