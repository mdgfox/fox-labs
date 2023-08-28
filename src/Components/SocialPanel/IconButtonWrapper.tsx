import { IconButton } from '@mui/material';
import React, { CSSProperties, useState } from 'react';

interface Props {
    hoverStyles: CSSProperties;
    link: string;
    children?: React.ReactNode;
}

const getStyles = (hover: boolean, hoverStyles: CSSProperties): CSSProperties => ({
    'transform': hover ? 'scale(1.2)' : 'scale(1.0)',
    'transition': 'all 0.3s',
    ...(hover && hoverStyles),
});

const IconButtonWrapper: React.FC<Props> = ({ hoverStyles, link, children }) => {
    const [hover, setHover] = useState(false);
    const styles = getStyles(hover, hoverStyles);
    return (
        <IconButton
            onPointerOver={(_e)=> setHover(true)}
            onPointerOut={(_e) => setHover(false)}
            style={styles}
        >
            {children}
        </IconButton>
    );
};

export default IconButtonWrapper;
