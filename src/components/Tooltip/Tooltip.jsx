import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as styles from '@/components/Tooltip/Tooltip.module.scss';

const Tooltip = ({ children, text }) => {
    const [isVisible, setIsVisible] = useState(false);

    // 顯示 Tooltip
    const showTooltip = () => setIsVisible(true);

    // 隱藏 Tooltip
    const hideTooltip = () => setIsVisible(false);

    // 觸控裝置上切換 Tooltip
    const toggleTooltip = () => setIsVisible((prev) => !prev);

    return (
        <div
            className={styles.tooltipContainer}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip} // 鍵盤導航
            onBlur={hideTooltip}  // 鍵盤導航
            onClick={toggleTooltip} // 觸控裝置
            tabIndex="0" // 使元素可被聚焦
            aria-describedby="tooltip"
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        id="tooltip"
                        role="tooltip"
                        className={styles.tooltipBox}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {text}
                        <div className={styles.tooltipArrow} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Tooltip;