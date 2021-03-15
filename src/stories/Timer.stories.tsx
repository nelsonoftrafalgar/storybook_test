import { Meta, Story } from '@storybook/react/types-6-0'
import Timer, { ITimerProps } from '../components/Timer'

export default {
    title: 'Timer',
    component: Timer
} as Meta

const Template: Story<ITimerProps> = (args) => <Timer {...args}/>

export const Default = Template.bind({})
Default.args = {
    count: 30
}
