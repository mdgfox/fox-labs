import { StoryObj, Meta } from '@storybook/react';
import { BurgerGallery } from '../Components/Galleries/burger';

const meta = {
    title: 'Kitsune/Galleries/Burger Gallery',
    component: BurgerGallery,
} satisfies Meta<typeof BurgerGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
