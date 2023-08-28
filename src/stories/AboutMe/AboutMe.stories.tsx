import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Index } from '../../Components/AboutMe';


const meta = {
    title: 'Intro/About Author',
    component: Index,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutMe: Story = {};
