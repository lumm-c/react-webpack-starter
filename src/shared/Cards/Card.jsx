import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '@/shared/Cards/Card.module.scss';

const Card = ({ icon, title, description, category, details, borderSVG }) => {
    return (
        <div className={styles.card}>
            {/* 如果有傳遞 border prop，渲染該組件 */}
            {borderSVG && <div className={styles.border}>{borderSVG}</div>}

            <div className={styles.cardContent}>
                <img src={icon} alt={`${title} icon`} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.cardFooter}>
                    <p className={styles.cardCategory}>{category}</p>
                    <p className={styles.cardDetails}>{details}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    details: PropTypes.string,
    borderSVG: PropTypes.node
};

export default Card;