import { Meta, Story } from '@storybook/react/types-6-0'
import TextIndicator, { ITextIndicatorProps } from '../components/TextIndicator'

export default {
    title: 'Indicator/TextIndicator',
    component: TextIndicator
} as Meta

const Template: Story<ITextIndicatorProps> = (args) => <TextIndicator {...args}/>

export const Default = Template.bind({})
Default.args = {
    text: 'Coffe'
}