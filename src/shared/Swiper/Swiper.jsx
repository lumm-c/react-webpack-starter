import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import * as styles from './Swiper.module.scss';
import ReactGA from 'react-ga4';

const Swiper = ({
    items,
    loop = false,
    autoplay = false,
    delay = 3000,
    direction = 'horizontal',
    onSlideChange,
    onExternalLinkClick
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = items.length;
    const [touchStart, setTouchStart] = useState(null);


    useEffect(() => {
        let interval;
        if (autoplay) {
            interval = setInterval(() => {
                nextSlide();
            }, delay);
        }
        return () => clearInterval(interval);
    }, [currentIndex, autoplay, delay]);

    const nextSlide = () => {
        if (currentIndex < totalItems - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (loop) {
            setCurrentIndex(0);
        }
        if (onSlideChange) onSlideChange(currentIndex + 1);
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (loop) {
            setCurrentIndex(totalItems - 1);
        }
        if (onSlideChange) onSlideChange(currentIndex - 1);
    };

    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        setTouchStart(touchStartX);
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStart - touchEndX > 50) {
            nextSlide();
        } else if (touchStart - touchEndX < -50) {
            prevSlide();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div
            className={`${styles.swiperContainer} ${direction === 'vertical' ? styles.vertical : ''}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <AnimatePresence>
                <motion.div
                    key={items[currentIndex].id}
                    className={styles.swiperSlide}
                    initial={{ opacity: 0, x: direction === 'horizontal' ? 100 : 0, y: direction === 'vertical' ? 100 : 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: direction === 'horizontal' ? -100 : 0, y: direction === 'vertical' ? -100 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={require(`@/assets/img/${items[currentIndex].image}`)} alt={items[currentIndex].title} className={styles.swiperImage} />
                    <div className={styles.swiperContent}>
                        <div className={styles.swiperTitle}>{items[currentIndex].id}</div>
                        <div className={styles.swiperTitle}>{items[currentIndex].title}</div>
                        <p>{items[currentIndex].description}</p>
                        <div className={styles.hashtags}>
                            {items[currentIndex].stack.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                        <div >

                            {items[currentIndex].live && (
                                <a href={items[currentIndex].live.url} onClick={() => onExternalLinkClick('Live')} target="_blank">
                                    <img src={require(`@/assets/${items[currentIndex].live.icon}`)} alt="Live Icon" />
                                </a>
                            )}
                        </div>
                        <div className={styles.pagination}>
                            <button onClick={prevSlide} disabled={!loop && currentIndex === 0}>← </button>
                            <span>{currentIndex + 1} / {totalItems}</span>
                            <button onClick={nextSlide} disabled={!loop && currentIndex === totalItems - 1}> →</button>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>

        </div>
    );
};

Swiper.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            stack: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    delay: PropTypes.number,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    onSlideChange: PropTypes.func,
    onExternalLinkClick: PropTypes.func.isRequired,  // 新增的 prop 驗證
};

export default Swiper;