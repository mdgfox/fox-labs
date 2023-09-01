import './index.scss';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap, {Linear} from 'gsap';
export const DotsFlashingLoader = () => {
    const [timeline, setTimeline] = useState<GSAPTimeline>();
    const dot1 = useRef<HTMLDivElement>(null);
    const dot2 = useRef<HTMLDivElement>(null);
    const dot3 = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({repeat: -1, repeatDelay: 1 });
            setTimeline(tl);
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        timeline && timeline
            .to(dot1.current, { duration: 0.33, opacity: 1, ease:Linear.easeNone, keyframes: [{opacity: 0.2}, {opacity: 0.4}, {opacity: 0.6}, {opacity: 0.8}, {opacity: 1}] })
            .to(dot1.current, { duration: 0.33, opacity: 0.2, ease:Linear.easeNone, keyframes: [{opacity: 1}, {opacity: 0.8}, {opacity: 0.6}, {opacity: 0.4}, {opacity: 0.2}] }, '>')
            .to(dot2.current, { duration: 0.33, opacity: 1, ease:Linear.easeNone, keyframes: [{opacity: 0.2}, {opacity: 0.4}, {opacity: 0.6}, {opacity: 0.8}, {opacity: 1}] }, '<')
            .to(dot2.current, { duration: 0.33, opacity: 0.2, ease:Linear.easeNone, keyframes: [{opacity: 1}, {opacity: 0.8}, {opacity: 0.6}, {opacity: 0.4}, {opacity: 0.2}] }, '>')
            .to(dot3.current, { duration: 0.33, opacity: 1, ease:Linear.easeNone, keyframes: [{opacity: 0.2}, {opacity: 0.4}, {opacity: 0.6}, {opacity: 0.8}, {opacity: 1}]}, '<')
            .to(dot3.current, { duration: 0.33, opacity: 0.2, ease:Linear.easeNone, keyframes: [{opacity: 1}, {opacity: 0.8}, {opacity: 0.6}, {opacity: 0.4}, {opacity: 0.2}] }, '>')
            .timeScale(1.5);
    }, [timeline]);

    return (
        <div className={'rootDots'}>
            <div ref={dot1} className={'dot first'}></div>
            <div ref={dot2} className={'dot second'}></div>
            <div ref={dot3} className={'dot third'}></div>
        </div>
    );
}
