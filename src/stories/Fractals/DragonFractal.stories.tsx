import { StoryObj } from '@storybook/react';
import { DragonFractal } from '../../Components/Fractals/DragonFractal/DragonFractal';

const meta = {
    title: 'Kitsune/Fractals/Dragon Fractal',
    component: DragonFractal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {canvasWidth: 450, canvasHeight: 400, depth: 8},
    argTypes: {depth: { control: { type: 'range', min: 0, max: 12, step: 1 }}}};
