import { Meta, Story } from '@storybook/react/types-6-0'
import ProgressBar, {IProgressBarProps} from '../components/ProgressBar'

export default {
    title: 'ProgressBar',
    component: ProgressBar
} as Meta

const Template: Story<IProgressBarProps> = (args) => <ProgressBar {...args}/>

export const Default = Template.bind({})
Default.args = {
    maxProgress: 200,
    currentProgress: 100
}