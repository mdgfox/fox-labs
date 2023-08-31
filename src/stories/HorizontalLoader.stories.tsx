import { StoryObj, Meta } from '@storybook/react';
import { HorizontalLoader } from '../Components/Loaders/HorizontalLoader';
const meta = {
    title: 'Kitsune/Loaders/Horizontal Loader',
    component: HorizontalLoader,
} satisfies Meta<typeof HorizontalLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
