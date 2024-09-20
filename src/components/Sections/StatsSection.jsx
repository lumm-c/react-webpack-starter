import React from 'react'
import CountUp from "react-countup";
import * as styles from '@/components/Sections/StatsSection.module.scss'
import { useInView } from 'react-intersection-observer';


const StatsSection = () => {
    const stats = [
        { num: 12, text: 'Years of Experience' },
        { num: 200, text: 'Projects Completed' },
        { num: 8, text: 'Technology Mastered' }
    ];
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5, // 當用戶滾動到元素一半時觸發
    });

    return (
        <div className={styles.statsContainer} ref={ref}>
            {
                stats.map((item, index) => {
                    return <div className={styles.stats} key={index}>
                        <div className={styles.statsItem}>
                            <CountUp end={item.num}
                                duration={5}
                                delay={2}
                                className={styles.number} />
                            <p className={styles.label}>{item.text}</p>
                        </div>
                        {index < stats.length - 1 && (
                            <div className={styles.separator} />
                        )}
                    </div>

                })
            }
        </div>
    )
}

export default StatsSection