import { StoryObj, Meta } from '@storybook/react';
import { DotsFloatingLoader } from '../Components/Loaders/dotsFloating/DotsFloatingLoader';
const meta = {
    title: 'Kitsune/Loaders/Dots Floating Loader',
    component: DotsFloatingLoader,
} satisfies Meta<typeof DotsFloatingLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
