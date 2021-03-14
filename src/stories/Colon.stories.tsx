import Colon, { IColonProps } from '../components/Colon'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
    title: 'Colon',
    component: Colon
} as Meta

const Template: Story<IColonProps> = (args) => <Colon {...args}/>

export const Default = Template.bind({})
Default.args = {
    double: true,
}
