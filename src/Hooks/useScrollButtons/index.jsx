import { useRef, useState, useEffect } from 'react';

const useScrollButtons = () => {
    const containerRef = useRef(null);
    const [scrollState, setScrollState] = useState({ showLeftButton: false, showRightButton: false });

    const updateScrollState = () => {
        if (!containerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

        setScrollState({
            showLeftButton: scrollLeft > 0,
            showRightButton: scrollLeft + clientWidth < (scrollWidth - 10),
        });
    };

    useEffect(() => {
        updateScrollState();
        const handleResize = () => updateScrollState();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScroll = (direction) => {
        const scrollAmount = 250;
        if (containerRef.current) {
            containerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
            
            setTimeout(() => {
                updateScrollState();
            }, 300);
        }
    };

    return { containerRef, scrollState, handleScroll };
};

export { useScrollButtons };
