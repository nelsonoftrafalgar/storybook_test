import { Meta, Story } from '@storybook/react/types-6-0'
import SpeakerButton, { ISpeakerButtonProps } from '../components/SpeakerButton'

export default {
    title: 'Button/SpeakerButton',
    component: SpeakerButton
} as Meta

const Template: Story<ISpeakerButtonProps> = (args) => <SpeakerButton {...args}/>

export const Small = Template.bind({})
Small.args = {
    size: 'small'
}

export const Large = Template.bind({})
Large.args = {
    size: 'large'
}