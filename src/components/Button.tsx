import { FC } from 'react'
import Icon from './Icon'
import classNames from 'classnames'

export interface IButtonProps {
	icon: string
	size: 'small' | 'large'
}

const Button: FC<IButtonProps> = ({ icon, size }) => {
	return (
		<div className={classNames('button-wrapper', size)}>
			<button className={classNames('button', size)}>
				<Icon className={classNames('button-icon', size)} src={icon} />
			</button>
		</div>
	)
}

export default Button
