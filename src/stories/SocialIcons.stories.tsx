import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import SocialIconsPanel from '../Components/socialIconsPanels/SocialIconsPanel';

export default {
    title: 'Kitsune/Social Icons',
    component: SocialIconsPanel,
} as Meta;

const Template: Story = () => (<SocialIconsPanel/>);

export const WithSomeContent = Template.bind({});
