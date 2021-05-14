import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Paper, PaperProps } from '../Components/Paper';

export default {
    title: 'Example/Paper',
    component: Paper,
} as Meta;

const Template: Story<PaperProps> = (args) => <Paper {...args} />;

const paperArgs: PaperProps = {
    container: 'flex',
    id: 'mainId',
};

export const SimplePaper = Template.bind({});
SimplePaper.args = {
    ...paperArgs,
};
