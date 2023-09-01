import './index.scss';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap, {Linear} from 'gsap';
export const DotsSpinLoader = () => {
    const [timeline, setTimeline] = useState<GSAPTimeline>();
    const spinner = useRef<HTMLDivElement>(null);
    const dot_1 = useRef<HTMLDivElement>(null);
    const dot_2 = useRef<HTMLDivElement>(null);
    const dot_3 = useRef<HTMLDivElement>(null);
    const dot_4 = useRef<HTMLDivElement>(null);
    const dot_5 = useRef<HTMLDivElement>(null);
    const dot_6 = useRef<HTMLDivElement>(null);
    const dot_7 = useRef<HTMLDivElement>(null);
    const dot_8 = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({repeat: -1, repeatDelay: 0 });
            setTimeline(tl);
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if(timeline) {

            gsap.to(dot_1.current, { opacity: 1, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 0, repeatDelay: 7 }).timeScale(7.5);
            gsap.to(dot_1.current, { opacity: 0, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 3, repeatDelay: 7 }).timeScale(7.5);

            gsap.to(dot_2.current, { opacity: 1, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 1, repeatDelay: 7 }).timeScale(7.5);
            gsap.to(dot_2.current, { opacity: 0, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 4, repeatDelay: 7 }).timeScale(7.5);

            gsap.to(dot_3.current, { opacity: 1, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 2, repeatDelay: 7 }).timeScale(7.5);
            gsap.to(dot_3.current, { opacity: 0, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 5, repeatDelay: 7  }).timeScale(7.5);

            gsap.to(dot_4.current, { opacity: 1, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 3, repeatDelay: 7 }).timeScale(7.5);
            gsap.to(dot_4.current, { opacity: 0, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 6, repeatDelay: 7 }).timeScale(7.5);

            gsap.to(dot_5.current, { opacity: 1, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 4, repeatDelay: 7 }).timeScale(7.5);
            gsap.to(dot_5.current, { opacity: 0, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 7, repeatDelay: 7  }).timeScale(7.5);

            gsap.to(dot_6.current, { opacity: 1, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 5, repeatDelay: 7 }).timeScale(7.5);
            gsap.to(dot_6.current, { opacity: 0, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 8, repeatDelay: 7 }).timeScale(7.5);

            gsap.to(dot_7.current, { opacity: 1, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 6, repeatDelay: 7 }).timeScale(7.5);
            gsap.to(dot_7.current, { opacity: 0, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 9, repeatDelay: 7 }).timeScale(7.5);

            gsap.to(dot_8.current, { opacity: 1, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 7, repeatDelay: 7 }).timeScale(7.5);
            gsap.to(dot_8.current, { opacity: 0, duration: 1, ease: Linear.easeNone, repeat: -1, delay: 10, repeatDelay: 7 }).timeScale(7.5);
                //.timeScale(7.5);
        }
    }, [timeline]);

    return (
        <div className={'rootDotsSpin'}>
            <div ref={spinner} className="spinner">
                <div ref={dot_1} className="dot-1" />
                <div ref={dot_2} className="dot-2" />
                <div ref={dot_3} className="dot-3" />
                <div ref={dot_4} className="dot-4" />
                <div ref={dot_5} className="dot-5" />
                <div ref={dot_6} className="dot-6" />
                <div ref={dot_7} className="dot-7" />
                <div ref={dot_8} className="dot-8" />
            </div>
        </div>
    );
}
