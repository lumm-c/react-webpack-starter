import { useEffect } from 'react';

const useScrollSpy = (setActiveLink) => {
    useEffect(() => {
        const sectionIds = ['home', 'services', 'projects', 'contact'];
        const sections = sectionIds.map(id => document.getElementById(id));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = sectionIds.indexOf(entry.target.id);
                        setActiveLink(index);  // 根據進入視口的區塊更新菜單項目高亮
                    }
                });
            },
            { threshold: 0.6 }  // 60% 區塊可見時觸發
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, [setActiveLink]);
};

export default useScrollSpy;