import { Meta, Story } from '@storybook/react/types-6-0'

import TrackControls from '../containers/TrackControls'

export default {
	title: 'Track/TrackControls',
	component: TrackControls,
} as Meta

const Template: Story = (args) => <TrackControls {...args} />

export const Default = Template.bind({})
