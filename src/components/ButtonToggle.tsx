import { FC, useState } from 'react'

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
				<img className='button-toggle-icon' src={toggle ? icon1 : icon2} alt='' />
			</button>
		</div>
	)
}

export default ButtonToggle
