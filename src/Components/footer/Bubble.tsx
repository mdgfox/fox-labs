import React from 'react';
import './FooterStyles.css';

const Bubble: React.FC = () => {
    const size = 2 + Math.random() * 4;
    const distance = 6 + Math.random() * 4;
    const position = -5 + Math.random() * 100;
    const time = 2 + Math.random() * 2;
    const delay = -1 * (2 + Math.random() * 2);

    const style = {
        '--size': `${size}rem`,
        '--distance': `${distance}rem`,
        '--position': `${position}%`,
        '--time': `${time}s`,
        '--delay': `${delay}s`,
    } as React.CSSProperties;

    return (
        <div className="bubble" style={style}></div>
    );
};

export default Bubble;
