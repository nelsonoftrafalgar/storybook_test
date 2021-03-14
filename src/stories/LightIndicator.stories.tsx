import LightIndicator, { ILightIndicatorProps } from '../components/LightIndicator'
import { Meta, Story } from '@storybook/react/types-6-0'

import icon from '../assets/icons/ok.svg'

export default {
    title: 'Indicator/LightIndicator',
    component: LightIndicator
} as Meta

const Template: Story<ILightIndicatorProps> = (args) => <LightIndicator {...args}/>

export const Default = Template.bind({})
Default.args = {
    text: 'Kitchen',
    on: false
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    icon,
    on: false
}