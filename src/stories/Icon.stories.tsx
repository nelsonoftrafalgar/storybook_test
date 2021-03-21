import Icon, { IIconProps } from '../components/Icon'
import { Meta, Story } from '@storybook/react/types-6-0'

import air_pods from '../assets/icons/air_pods.svg'
import coffe from '../assets/icons/coffe.svg'
import fast_forward from '../assets/icons/fast_forward.svg'
import gear from '../assets/icons/gear.svg'
import lines from '../assets/icons/lines.svg'
import looking_glass from '../assets/icons/looking_glass.svg'
import minus from '../assets/icons/minus.svg'
import ok from '../assets/icons/ok.svg'
import pause from '../assets/icons/pause.svg'
import phone from '../assets/icons/phone.svg'
import play from '../assets/icons/play.svg'
import plus from '../assets/icons/plus.svg'
import rain from '../assets/icons/rain.svg'
import sliders from '../assets/icons/sliders.svg'
import slow_backward from '../assets/icons/slow_backward.svg'
import speaker from '../assets/icons/speaker.svg'
import sun from '../assets/icons/sun.svg'
import toast from '../assets/icons/toast.svg'

export default {
	title: 'Icon',
	component: Icon,
} as Meta

const Template: Story<IIconProps> = (args) => <Icon {...args} />

export const Sun = Template.bind({})
Sun.args = {
	src: sun,
}

export const Rain = Template.bind({})
Rain.args = {
	src: rain,
}

export const AirPods = Template.bind({})
AirPods.args = {
	src: air_pods,
}

export const Coffe = Template.bind({})
Coffe.args = {
	src: coffe,
}

export const Gear = Template.bind({})
Gear.args = {
	src: gear,
}

export const Lines = Template.bind({})
Lines.args = {
	src: lines,
}

export const LookingGlass = Template.bind({})
LookingGlass.args = {
	src: looking_glass,
}

export const Phone = Template.bind({})
Phone.args = {
	src: phone,
}

export const Sliders = Template.bind({})
Sliders.args = {
	src: sliders,
}

export const Speaker = Template.bind({})
Speaker.args = {
	src: speaker,
}

export const FastForward = Template.bind({})
FastForward.args = {
	src: fast_forward,
}

export const Minus = Template.bind({})
Minus.args = {
	src: minus,
}

export const Ok = Template.bind({})
Ok.args = {
	src: ok,
}

export const Pause = Template.bind({})
Pause.args = {
	src: pause,
}

export const Play = Template.bind({})
Play.args = {
	src: play,
}

export const Plus = Template.bind({})
Plus.args = {
	src: plus,
}

export const SlowBackward = Template.bind({})
SlowBackward.args = {
	src: slow_backward,
}

export const Toast = Template.bind({})
Toast.args = {
	src: toast,
}
