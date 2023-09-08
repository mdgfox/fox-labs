import { StoryObj } from '@storybook/react';
import { DotsFlashingLoader } from '../Components/Loaders/dotsFlashing/DotsFlashingLoader';
import { DotsFloatingLoader } from '../Components/Loaders/dotsFloating/DotsFloatingLoader';
import { DotsSpinLoader } from '../Components/Loaders/dotsSpin/DotsSpinLoader';
import { HorizontalLoader } from '../Components/Loaders/horizontal/HorizontalLoader';
const meta = {
    title: 'Kitsune/Loaders/All Loaders',
    component: () => (<></>),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [() => (
        <div className={'flex flex-col gap-4'}>
            <div className={'min-h-[100px]'}>
                <p>Dots Flashing Loader</p>
                <DotsFlashingLoader/>
            </div>
            <div className={'min-h-[100px]'}>
                <p>Dots Floating loader</p>
                <DotsFloatingLoader/>
            </div>
            <div className={'min-h-[100px]'}>
                <p>Dots Spin Loader</p>
                <DotsSpinLoader/>
            </div>
            <div className={'min-h-[100px]'}>
                <p>Horizontal Loader</p>
                <HorizontalLoader/>
            </div>
        </div>
    )]
}
