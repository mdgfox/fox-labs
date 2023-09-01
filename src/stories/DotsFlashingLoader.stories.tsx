import { StoryObj, Meta } from '@storybook/react';
import { DotsFlashingLoader } from '../Components/Loaders/dotsFlashing/DotsFlashingLoader';
const meta = {
    title: 'Kitsune/Loaders/Dots Flashing Loader',
    component: DotsFlashingLoader,
} satisfies Meta<typeof DotsFlashingLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
