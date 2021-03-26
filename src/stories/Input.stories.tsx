import { Meta, Story } from '@storybook/react/types-6-0'

import Input from '../components/Input'

export default {
    title: 'Input',
    component: Input
} as Meta

const Template: Story = (args) => <Input {...args}/>

export const Default = Template.bind({})
