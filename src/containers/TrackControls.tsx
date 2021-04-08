import Button from '../components/Button'
import ButtonToggle from '../components/ButtonToggle'
import minus from '../assets/icons/minus.svg'
import pause from '../assets/icons/pause.svg'
import play from '../assets/icons/play.svg'
import plus from '../assets/icons/plus.svg'

const TrackControls = () => {
	return (
		<div className='w-100 d-flex align-items-center justify-content-center m-top-20 m-bottom-60'>
			<Button size='large' icon={minus} classname='m-right-35' />
			<ButtonToggle icon1={play} icon2={pause} />
			<Button size='large' icon={plus} classname='m-left-35' />
		</div>
	)
}

export default TrackControls
