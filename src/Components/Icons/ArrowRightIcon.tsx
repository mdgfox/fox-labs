import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

const ArrowRightIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </SvgIcon>
);

export default ArrowRightIcon;
