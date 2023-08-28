import TwitterIcon from './Icons/TwitterIcon';
import InstagramIcon from './Icons/InstagramIcon';
import YoutubeIcon from './Icons/YoutubeIcon';
import LinkedInIcon from './Icons/LinkedInIcon';
import IconButtonWrapper from './IconButtonWrapper';
import React from 'react';

const SocialIconsPanel: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#EED5D1', padding: '10px 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <IconButtonWrapper hoverStyles={{ backgroundColor: '#1D9BF0' }} link='#'><TwitterIcon/></IconButtonWrapper>

            <IconButtonWrapper hoverStyles={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)' }} link='#'><InstagramIcon/></IconButtonWrapper>

            <IconButtonWrapper hoverStyles={{ backgroundColor: '#e52d27' }} link='#'><YoutubeIcon/></IconButtonWrapper>

            <IconButtonWrapper hoverStyles={{ backgroundColor: '#0A66C2' }} link='#'><LinkedInIcon/></IconButtonWrapper>
        </div>
    );
};

export default SocialIconsPanel;
