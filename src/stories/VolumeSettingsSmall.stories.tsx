import { Meta, Story } from '@storybook/react/types-6-0'

import VolumeSettingsSmall from '../containers/VolumeSettingsSmall'

export default {
	title: 'Volume/VolumeSettingsSmall',
	component: VolumeSettingsSmall,
} as Meta

const Template: Story = (args) => (
	<div className='d-flex'>
		<VolumeSettingsSmall {...args} />
	</div>
)

export const Default = Template.bind({})
