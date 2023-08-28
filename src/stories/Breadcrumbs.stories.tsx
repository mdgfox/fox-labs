import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs';

const meta = {
    title: 'Kitsune/Breadcrumbs',
    component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        location: {
            href: 'https://your-site-home/some/path-to/your-best-page',
            origin: 'https://your-site-home',
            pathname: '/some/path-to/your-best-page',
            ancestorOrigins: {} as any,
            hash: '',
            host: '',
            hostname: '',
            port: '',
            protocol: '',
            search: '',
            assign: function (_url: string | URL): void {
                throw new Error('Function not implemented.');
            },
            reload: function (): void {
                throw new Error('Function not implemented.');
            },
            replace: function (_url: string | URL): void {
                throw new Error('Function not implemented.');
            },
        },
    }
};
