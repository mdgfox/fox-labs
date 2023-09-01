import { StoryObj, Meta } from '@storybook/react';
import { DotsSpinLoader } from '../Components/Loaders/dotsSpin/DotsSpinLoader';
const meta = {
    title: 'Kitsune/Loaders/Dots Spin Loader',
    component: DotsSpinLoader,
} satisfies Meta<typeof DotsSpinLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
