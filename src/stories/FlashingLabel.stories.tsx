import { StoryObj, Meta } from '@storybook/react';
import { FlashingLabel } from '../Components/FlashingLabel/FlashingLabel';
const meta = {
    title: 'Kitsune/Flashing Label',
    component: FlashingLabel,
} satisfies Meta<typeof FlashingLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Flashing is a kind of magic!',
        classNamesContainer: '',
        classNamesText: '',
    }
};
