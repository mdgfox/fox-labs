import { StoryObj, Meta } from '@storybook/react';
import { AnimatedGradientBorder } from '../Components/AnimatedBorder/AnimatedGradientBorder';
const meta = {
    title: 'Kitsune/AnimatedGradientBorders',
    component: AnimatedGradientBorder,
} satisfies Meta<typeof AnimatedGradientBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
