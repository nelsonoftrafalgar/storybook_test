import { Meta, Story } from '@storybook/react/types-6-0'

import TrackProgress from '../containers/TrackProgress'

export default {
	title: 'Track/TrackProgress',
	component: TrackProgress,
} as Meta

const Template: Story = (args) => <TrackProgress {...args} />

export const Default = Template.bind({})
