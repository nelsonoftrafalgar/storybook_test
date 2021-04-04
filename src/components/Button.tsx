import { FC } from 'react'
import Icon from './Icon'
import classNames from 'classnames'

export interface IButtonProps {
	icon: string
	size: 'small' | 'large'
	classname?: string
	onClick?: () => void
}

const Button: FC<IButtonProps> = ({ icon, size, classname, onClick }) => {
	return (
		<div className={classNames('button-wrapper', size, classname)}>
			<button onClick={onClick} className={classNames('button', size)}>
				<Icon className={classNames('button-icon', size)} src={icon} />
			</button>
		</div>
	)
}

export default Button
