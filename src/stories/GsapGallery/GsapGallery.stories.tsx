import { StoryObj, Meta } from '@storybook/react';
import { GsapGallery } from '../../Components/Galleries/gsap';

const meta = {
    title: 'Kitsune/GSAP Gallery',
    tags: ['autodocs'],
    component: GsapGallery,
} satisfies Meta<typeof GsapGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
