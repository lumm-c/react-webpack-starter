//src/components/buttons/button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '@/components/buttons/Button.module.scss';

function Button({
    type = 'primary',
    icon,
    iconPosition = 'left',
    afterContent = '',
    size = 'medium',
    isLoading,
    isDisabled,
    children,
    ...props
}) {
    // 動態設置按鈕的圖標位置
    const buttonClasses = `
    ${styles.button} 
    ${styles[type]} 
    ${styles[size]} 
    ${isDisabled ? styles.disabled : ''}
  `;

    const iconClasses = `${styles.icon} ${styles[iconPosition]}`;

    return (
        <button
            className={buttonClasses}
            disabled={isDisabled || isLoading}
            style={{ '--after-content': `url(${afterContent})` }}
            {...props}
        >
            {isLoading ? <span className={styles.loader}></span> : null}

            {/* 根據 iconPosition 動態渲染圖標 */}
            {icon && iconPosition === 'left' && <span className={iconClasses}>{icon}</span>}

            {children} {/* 傳入按鈕文本 */}

            {icon && iconPosition === 'right' && <span className={iconClasses}>{icon}</span>}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']),
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    afterContent: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
};

export default Button;