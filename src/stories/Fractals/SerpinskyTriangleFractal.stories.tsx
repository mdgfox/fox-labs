import { StoryObj } from '@storybook/react';
import { SerpinskyTriangleFractal } from '../../Components/Fractals/DragonFractal/SerpinskyTriangleFractal';

const meta = {
    title: 'Kitsune/Fractals/Serpinsky Triangle Fractal',
    component: SerpinskyTriangleFractal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {canvasWidth: 450, canvasHeight: 400, depth: 4},
    argTypes: {depth: { control: { type: 'range', min: 0, max: 8, step: 1 }}}};
