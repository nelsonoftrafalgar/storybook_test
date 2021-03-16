import ButtonToggle, { IButtonToggleProps } from '../components/ButtonToggle'
import { Meta, Story } from '@storybook/react/types-6-0'

import icon1 from '../assets/icons/play.svg'
import icon2 from '../assets/icons/pause.svg'

export default {
    title: 'Button/ButtonToggle',
    component: ButtonToggle
} as Meta

const Template: Story<IButtonToggleProps> = (args) => <ButtonToggle {...args}/>

export const Default = Template.bind({})
Default.args = {
    icon1,
    icon2
}
