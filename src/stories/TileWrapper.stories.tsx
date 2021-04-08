import { Meta, Story } from '@storybook/react/types-6-0'
import TileWrapper, { ITileWrapperProps } from '../components/TileWrapper'

import Icon from '../components/Icon'
import sliders from '../assets/icons/sliders.svg'

export default {
	title: 'TileWrapper',
	component: TileWrapper,
} as Meta

const Template: Story<ITileWrapperProps> = (args) => (
	<div style={{ width: '50px' }}>
		<TileWrapper {...args}>
			<Icon src={sliders} />
		</TileWrapper>
	</div>
)

export const Default = Template.bind({})
