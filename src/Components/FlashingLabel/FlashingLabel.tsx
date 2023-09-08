import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface Props {
    text: string;
    classNamesContainer?: string;
    classNamesText?: string;
    targetOpacity?: number;
    repeatDelay?: number;
    duration?: number;
}
export const FlashingLabel: FC<Props> = ({text, classNamesContainer = '', classNamesText = '', ...args}) => {
    const {repeatDelay = 0.5, targetOpacity = 0, duration = 1.2} = args;
    const [timeline, setTimeline] = useState<GSAPTimeline>();
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({repeat: -1, repeatDelay, yoyo: true });
            setTimeline(tl);
        });


        return () => ctx.revert();
    }, [repeatDelay]);

    useEffect(() => {
        timeline && timeline
            .to(containerRef.current, { duration, opacity: targetOpacity, ease: "slow(0.5, 0.4, false)" })
    }, [duration, targetOpacity, timeline]);

    return (
        <div className={`flex opacity-100 ${classNamesContainer}`} ref={containerRef}>
            <p className={classNamesText}>{text}</p>
        </div>
    );
}
