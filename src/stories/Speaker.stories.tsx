import { Meta, Story } from '@storybook/react/types-6-0'
import Speaker, { ISpeakerProps } from '../components/Speaker'

export default {
    title: 'Speaker',
    component: Speaker
} as Meta

const Template: Story<ISpeakerProps> = (args) => <Speaker {...args}/>

export const Small = Template.bind({})
Small.args = {
    text: 'L top',
    size: 'small'
}

export const Large = Template.bind({})
Large.args = {
    text: 'Speaker',
    size: 'large'
}

export const Long = Template.bind({})
Long.args = {
    size: 'long'
}