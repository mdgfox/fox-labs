import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
export const DotsFloatingLoader = () => {
    const [timeline, setTimeline] = useState<GSAPTimeline>();
    const [containerWidth, setContainerWidth] = useState<number>(window.innerWidth);
    const containerRef = useRef<HTMLDivElement>(null);
    const dot1 = useRef<HTMLDivElement>(null);
    const dot2 = useRef<HTMLDivElement>(null);
    const dot3 = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({repeat: -1, repeatDelay: 0 });
            setTimeline(tl);
        });

        if(containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        timeline && timeline
            .to(dot3.current, { duration: 2, x: containerWidth / 2, ease: "slow(0.7, 0.7, false)" })
            .to(dot3.current, { duration: 1.5, x: containerWidth + 150, ease: "slow(0.5, 0.7, false)" }, '>')

            .to(dot2.current, { duration: 2, x: containerWidth / 2, ease: "slow(0.7, 0.7, false)" }, '0.2')
            .to(dot2.current, { duration: 1.5, x: containerWidth + 125, ease: "slow(0.5, 0.7, false)" }, '>')

            .to(dot1.current, { duration: 2, x: containerWidth / 2, ease: "slow(0.7, 0.7, false)" }, '0.4')
            .to(dot1.current, { duration: 1.5, x: containerWidth + 100, ease: "slow(0.5, 0.7, false)" }, '>')
            .timeScale(1);
    }, [containerWidth, timeline]);

    return (
        <div className={'flex gap-1.5 overflow-hidden'} ref={containerRef}>
            <div className={'relative left-[-75px] rounded-full w-[20px] h-[20px] bg-[#D1114D]'} ref={dot1} ></div>
            <div className={'relative left-[-75px] rounded-full w-[20px] h-[20px] bg-[#D1114D]'} ref={dot2} ></div>
            <div className={'relative left-[-75px] rounded-full w-[20px] h-[20px] bg-[#D1114D]'} ref={dot3} ></div>
        </div>
    );
}
