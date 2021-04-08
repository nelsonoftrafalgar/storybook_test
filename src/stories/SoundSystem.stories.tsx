import { Meta, Story } from '@storybook/react/types-6-0'

import SoundSystem from '../containers/SoundSystem'

export default {
	title: 'Sound/SoundSystem',
	component: SoundSystem,
} as Meta

const Template: Story = (args) => <SoundSystem {...args} />

export const Default = Template.bind({})
