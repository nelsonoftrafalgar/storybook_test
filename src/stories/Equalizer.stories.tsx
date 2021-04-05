import Equalizer, { IEqualizerProps } from '../containers/Equalizer'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
	title: 'Equalizer',
	component: Equalizer,
} as Meta

const Template: Story<IEqualizerProps> = (args) => <Equalizer {...args} />

export const Default = Template.bind({})
Default.args = {
	equalizerData: [
		{ max: 15, text: '60 Hz' },
		{ max: 12, text: '120 Hz' },
		{ max: 18, text: '400 Hz' },
		{ max: 30, text: '2 Kz' },
		{ max: 20, text: '4 Kz' },
		{ max: 16, text: '8 Kz' },
		{ max: 17, text: '16 Kz' },
	],
}
