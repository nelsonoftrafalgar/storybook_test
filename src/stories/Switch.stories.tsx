import { Meta, Story } from '@storybook/react/types-6-0'
import Switch, { ISwitchProps } from '../components/Switch'

export default {
    title: 'Switch',
    component: Switch
} as Meta

const Template: Story<ISwitchProps> = (args) => <Switch {...args}/>

export const Default = Template.bind({})
Default.args = {
    left: true,
    handleSwitch: () => {}
}
