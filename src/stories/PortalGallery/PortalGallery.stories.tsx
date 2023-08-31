import { StoryObj, Meta } from '@storybook/react';
import { PortalGallery } from '../../Components/Galleries/portal';

const meta = {
    title: 'Kitsune/Galleries/ThreeJS/Portal Gallery',
    component: PortalGallery,
} satisfies Meta<typeof PortalGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
