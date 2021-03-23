import EQSlider, {IEQSliderProps} from '../components/EQSlider'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
    title: 'EQSlider',
    component: EQSlider
} as Meta

const Template: Story<IEQSliderProps> = (args) => <EQSlider {...args}/>

export const Default = Template.bind({})
Default.args = {
    max: 100
}