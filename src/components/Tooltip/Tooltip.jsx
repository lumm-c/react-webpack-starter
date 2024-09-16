import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as styles from '@/components/Tooltip/Tooltip.module.scss'

const Tooltip = ({ children, text }) => {
    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    return (
        <div className={styles.tooltipContainer} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {isVisible && (
                <motion.div
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
        </div>
    );
};

export default Tooltip;