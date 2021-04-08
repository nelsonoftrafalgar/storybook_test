import { Meta, Story } from '@storybook/react/types-6-0'

import TrackRepeat from '../containers/TrackRepeat'

export default {
	title: 'Track/TrackRepeat',
	component: TrackRepeat,
} as Meta

const Template: Story = (args) => (
	<div className='middle-section-text-wrapper w-100 d-flex flex-column align-items-center'>
		<TrackRepeat {...args} />
	</div>
)

export const Default = Template.bind({})
