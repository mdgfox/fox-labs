import { StoryObj, Meta } from '@storybook/react';
import { Carousel } from '../../Components/Galleries/carousel/Carousel';

const meta = {
    title: 'Kitsune/Galleries/ThreeJS/3D Carousel',
    component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {type: '3D'}};
