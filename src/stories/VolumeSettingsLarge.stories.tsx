import { Meta, Story } from '@storybook/react/types-6-0'

import VolumeSettingsLarge from '../containers/VolumeSettingsLarge'

export default {
	title: 'Volume/VolumeSettingsLarge',
	component: VolumeSettingsLarge,
} as Meta

const Template: Story<any> = (args) => (
	<div className='d-flex'>
		<VolumeSettingsLarge {...args} />
	</div>
)

export const Default = Template.bind({})
