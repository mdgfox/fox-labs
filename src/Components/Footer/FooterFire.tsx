import React, { useMemo } from 'react';
import './FooterStyles.css';
import Bubble from './Bubble';

interface Props {
    children?: React.ReactNode;
}

const FooterFire: React.FC<Props> = ({ children }) => {
    const bubbles = useMemo(() => {
        const result = [];
        for (let i = 0; i < 96; i++) {
            result.push(<Bubble/>);
        }
        return result;
    }, []);
    return (
        <>
            <div className="footer">
                <div className="bubbles">
                    {bubbles}
                </div>
                <div className="content">{children}</div>
            </div>
            <svg style={{ position: 'fixed', top: '100vh' }}>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default FooterFire;
