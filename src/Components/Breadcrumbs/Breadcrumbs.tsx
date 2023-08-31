import React, { useMemo } from 'react';
import IconButtonWrapper from '../SocialPanel/IconButtonWrapper';
import HomeIcon from '../Icons/HomeIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import { Link } from '@mui/material';

export const Breadcrumbs: React.FC<{location: Location}> = ({ location }) => {
    const { pathname, href, origin } = location;

    const breadcrumbsLayout = useMemo(() => {
        return pathname.split('/').slice(1).map((pathPart) => {
            const normalizedPathPart = pathPart.replace(/[#_\-.]/g, ' ');
            return (
                <div key={'breadcrumbs-' + pathPart}>
                    <ArrowRightIcon/>
                    <Link
                        sx={{ 'textTransform': 'capitalize', 'color': 'black', ':hover': { 'color': '#D6517C' } }}
                        component="button"
                        underline="none"
                        href={href + pathname.substring(0, pathname.indexOf(pathPart))}
                    >
                        {normalizedPathPart}
                    </Link>
                </div>
            );
        });
    }, [pathname, href]);

    return (
        <span style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
            <IconButtonWrapper hoverStyles={{ backgroundColor: '#D6517C' }} link={origin}><HomeIcon/></IconButtonWrapper>
            {breadcrumbsLayout}
        </span>
    );
};
