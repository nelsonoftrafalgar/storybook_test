import { Meta, Story } from '@storybook/react/types-6-0'
import Volume, { IVolumeProps } from '../containers/Volume'

export default {
	title: 'Volume/Volume',
	component: Volume,
} as Meta

const Template: Story<IVolumeProps> = (args) => (
	<div className='d-flex flex-column align-items-center m-left-20 m-right-40'>
		<Volume {...args} />
	</div>
)

export const Default = Template.bind({})
Default.args = {
	volume: 50,
}
