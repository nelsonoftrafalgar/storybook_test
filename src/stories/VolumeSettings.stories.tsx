import { Meta, Story } from '@storybook/react/types-6-0'

import VolumeSettings from '../containers/VolumeSettings'

export default {
	title: 'Volume/VolumeSettings',
	component: VolumeSettings,
} as Meta

const Template: Story = (args) => (
	<div className='d-flex align-items-center justify-content-center w-100 m-top-60'>
		<VolumeSettings {...args} />
	</div>
)

export const Default = Template.bind({})
