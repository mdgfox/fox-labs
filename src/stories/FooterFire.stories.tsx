import { StoryObj, Meta } from '@storybook/react';
import FooterFire from '../Components/Footer/FooterFire';

const meta = {
    title: 'Kitsune/Footer',
    component: FooterFire,
} satisfies Meta<typeof FooterFire>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [(_story) => (
        <div style={{ overflowX: 'clip' }}>
            <div style={{ height: '65vh', backgroundColor: '#EED5D1', textAlign: 'center' }}>
                <p style={{ paddingTop: 10 }}>Here can be some page content!</p>
            </div>
            <FooterFire><p style={{ textAlign: 'center' }}>{'Here should be some Footer content!'}</p></FooterFire>
        </div>
    )],
}



