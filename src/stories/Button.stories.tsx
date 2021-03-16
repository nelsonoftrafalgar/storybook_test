import Button, { IButtonProps } from '../components/Button'
import { Meta, Story } from '@storybook/react/types-6-0'

import fast_forward from '../assets/icons/fast_forward.svg'
import minus from '../assets/icons/minus.svg'
import plus from '../assets/icons/plus.svg'
import slow_backward from '../assets/icons/slow_backward.svg'

export default {
    title: 'Button/Button',
    component: Button
} as Meta

const Template: Story<IButtonProps> = (args) => <Button {...args}/>

export const FastForward = Template.bind({})
FastForward.args = {
    icon: fast_forward,
    size: 'large'
}

export const SlowBackward = Template.bind({})
SlowBackward.args = {
    icon: slow_backward,
    size: 'large'
}

export const Plus = Template.bind({})
Plus.args = {
    icon: plus,
    size: 'small'
}

export const Minus = Template.bind({})
Minus.args = {
    icon: minus,
    size: 'small'
}
