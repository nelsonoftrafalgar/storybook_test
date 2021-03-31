import { FC } from 'react'
import Icon from './Icon'
import classNames from 'classnames'

export interface ILightIndicatorProps {
	text?: string
	on?: boolean
	icon?: string
	classname?: string
}

const LightIndicator: FC<ILightIndicatorProps> = ({ text, on, icon, classname }) => {
	return (
		<span className={classNames('light-indicator', { on, icon }, classname)}>
			{icon ? <Icon className='light-indicator-icon' src={icon} /> : text}
		</span>
	)
}

export default LightIndicator
