import { Meta, Story } from '@storybook/react/types-6-0'
import TrackIndicator, { ITrackIndicatorProps } from '../components/TrackIndicator'

export default {
    title: 'Indicator/TrackIndicator',
    component: TrackIndicator
} as Meta

const Template: Story<ITrackIndicatorProps> = (args) => <TrackIndicator {...args}/>

export const Default = Template.bind({})
Default.args = {
    track: 1
}
