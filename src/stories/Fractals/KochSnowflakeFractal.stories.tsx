import { StoryObj } from '@storybook/react';
import { KochSnowflakeFractal } from '../../Components/Fractals/DragonFractal/KochSnowflakeFractal';

const meta = {
    title: 'Kitsune/Fractals/Koch Snowflake Fractal',
    component: KochSnowflakeFractal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {canvasWidth: 450, canvasHeight: 400, length: 150, iterations: 3},
    argTypes: {
        iterations: { control: { type: 'range', min: 0, max: 5, step: 1 }},
        length: { control: { type: 'range', min: 0, max: 200, step: 1 }}
    }
};
