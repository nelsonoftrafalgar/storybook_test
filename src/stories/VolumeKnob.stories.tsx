import { Meta, Story } from '@storybook/react/types-6-0'

import VolumeKnob from '../components/VolumeKnob'

export default {
	title: 'Volume/VolumeKnob',
	component: VolumeKnob,
} as Meta

const Template: Story<any> = (args) => <VolumeKnob {...args} />

export const Default = Template.bind({})
