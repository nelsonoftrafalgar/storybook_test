import { FC } from 'react'
import classNames from 'classnames'

export interface IButtonProps {
	icon: string
	size: 'small' | 'large'
}

const Button: FC<IButtonProps> = ({ icon, size }) => {
	return (
		<div className={classNames('button-wrapper', size)}>
			<button className={classNames('button', size)}>
				<img className={classNames('button-icon', size)} src={icon} alt='' />
			</button>
		</div>
	)
}

export default Button
