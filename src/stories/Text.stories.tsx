import { Meta, Story } from '@storybook/react/types-6-0'
import Text, { ITextProps } from '../components/Text'

export default {
    title: 'Text',
    component: Text
} as Meta

const Template: Story<ITextProps> = (args) => <Text {...args}/>

export const Default = Template.bind({})
Default.args = {
    text: 'Afterglow',
    color: 'dark',
    size: 'xl',
    weight: 'regular'
}
