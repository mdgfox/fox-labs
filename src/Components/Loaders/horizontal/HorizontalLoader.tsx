import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './index.scss'
export const HorizontalLoader = () => {
    const [timeline, setTimeline] = useState<GSAPTimeline>();
    const containerRef = useRef<HTMLDivElement>(null);
    const squareRef = useRef(null);
    const [repeat, setRepeat] = useState(1);

    useLayoutEffect(() => {
        if(containerRef.current) {
            const repeat = Math.floor(containerRef.current.offsetWidth / 45 - 1);
            setRepeat(repeat);
        }
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({repeat: -1, repeatDelay: 0 });
            setTimeline(tl);
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if(timeline) {
            timeline
                .to(squareRef.current, { duration: 5, rotate: 90 * repeat, x: 45 * repeat, ease: 'none'}, 1)
                .to(squareRef.current, { duration: 5, rotate: 0, x: 0, ease: 'none'}, '+=1');
        }
    }, [repeat, timeline]);

    return (
        <div ref={containerRef} className={'rootHorizontal'}>
            <div ref={squareRef} className={'square'}></div>
        </div>
    );
}
