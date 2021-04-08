import { Meta, Story } from '@storybook/react/types-6-0'

import TrackPanel from '../containers/TrackPanel'

export default {
	title: 'Track/TrackPanel',
	component: TrackPanel,
} as Meta

const Template: Story = (args) => <TrackPanel {...args} />

export const Default = Template.bind({})
