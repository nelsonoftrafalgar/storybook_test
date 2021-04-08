import { Meta, Story } from '@storybook/react/types-6-0'

import VolumeSettingsColumn from '../containers/VolumeSettingsColumn'

export default {
	title: 'Volume/VolumeSettingsColumn',
	component: VolumeSettingsColumn,
} as Meta

const Template: Story = (args) => (
	<div className='d-flex flex-column justify-content-end align-items-center'>
		<VolumeSettingsColumn {...args} />
	</div>
)

export const Default = Template.bind({})
