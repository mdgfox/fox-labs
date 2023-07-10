import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import FooterFire from '../Components/footer/FooterFire';

export default {
    title: 'Kitsune/Footer',
    component: FooterFire,
} as Meta;

const Template: Story = (args) => (
    <div style={{ overflowX: 'clip' }}>
        <div style={{ height: '68vh' }}>Here can be some page content!</div>
        <FooterFire><p>{args.text}</p></FooterFire>
    </div>
);

export const WithSomeContent = Template.bind({});
WithSomeContent.args = {
    text: 'Here should be some footer content!',
};
