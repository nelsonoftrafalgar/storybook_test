import { Meta, Story } from '@storybook/react/types-6-0'
import TileWrapper, { ITileWrapperProps } from '../components/TileWrapper'

import Icon from '../components/Icon'
import sliders from '../assets/icons/sliders.svg'

export default {
	title: 'TileWrapper',
	component: TileWrapper,
} as Meta

const Template: Story<ITileWrapperProps> = (args) => (
	<TileWrapper {...args}>
		<Icon src={sliders} />
	</TileWrapper>
)

export const Default = Template.bind({})
Default.args = {
    width: '30'
}
