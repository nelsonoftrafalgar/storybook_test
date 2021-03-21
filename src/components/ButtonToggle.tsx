import { FC, useState } from 'react'

import Icon from './Icon'

export interface IButtonToggleProps {
	icon1: string
	icon2: string
}

const ButtonToggle: FC<IButtonToggleProps> = ({ icon1, icon2 }) => {
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<div className='button-toggle-wrapper'>
			<button className='button-toggle' onClick={handleToggle}>
				<Icon width='16' src={toggle ? icon1 : icon2} />
			</button>
		</div>
	)
}

export default ButtonToggle
