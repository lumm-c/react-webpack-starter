//src/utils/loadChineseFont.js
import { log, logLevel } from '@/utils/log';

const loadChineseFont = async () => {
    try {
        const isLoaded = await document.fonts.load('1em Open Huninn');

        if (isLoaded.length > 0) {
            log(logLevel.INFO, 'Chinese font already loaded.');
            return;
        }
        const fontPath = await import('@/assets/fonts/open-huninn-font/jf-openhuninn.woff2');
        log(logLevel.DEBUG, 'Font path loaded:' + fontPath.default);

        const font = new FontFace('Open Huninn', `url(${fontPath.default})`, {
            weight: 'normal',
            style: 'normal',
            display: 'swap',
        });
        log(logLevel.DEBUG, 'Attempting to load font...');
        await font.load();
        document.fonts.add(font);
        log(logLevel.INFO, 'Chinese font loaded successfully.');
    } catch (error) {
        log(logLevel.ERROR, 'Error during font loading process:', error.message);
        log(logLevel.ERROR, 'Stack trace:', error.stack);
    }
};

export default loadChineseFont;
