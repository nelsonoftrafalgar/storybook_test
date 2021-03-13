import { Meta, Story } from '@storybook/react/types-6-0'
import PercentIndicator, { IPercentIndicatorProps } from '../components/PercentIndicator'

export default {
    title: 'Indicator/PercentIndicator',
    component: PercentIndicator
} as Meta

const Template: Story<IPercentIndicatorProps> = (args) => <PercentIndicator {...args}/>

export const Default = Template.bind({})
Default.args = {
    percent: 50
}
