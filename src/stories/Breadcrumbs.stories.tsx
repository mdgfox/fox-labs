import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';


export default {
    title: 'Kitsune/Breadcrumbs',
    component: Breadcrumbs,
} as Meta;

const Template: Story = ({ href, origin, pathname }) => {
    // window.location.href = window.location.href + '/some/path-to/your-best-page';
    return (
        <div style={{ backgroundColor: '#EED5D1', padding: '10px 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <Breadcrumbs location={{ href, origin, pathname } as Location}/>
        </div>
    );
};

export const WithSomeContent = Template.bind({});
WithSomeContent.args = {
    href: 'https://your-site-home/some/path-to/your-best-page',
    origin: 'https://your-site-home',
    pathname: '/some/path-to/your-best-page',
};
