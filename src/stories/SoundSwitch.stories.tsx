import { Meta, Story } from '@storybook/react/types-6-0'

import SoundSwitch from '../containers/SoundSwitch'

export default {
	title: 'Sound/SoundSwitch',
	component: SoundSwitch,
} as Meta

const Template: Story = (args) => <SoundSwitch {...args} />

export const Default = Template.bind({})
