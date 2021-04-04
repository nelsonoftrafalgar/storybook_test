import Button from '../components/Button'
import Volume from './Volume'
import minus from '../assets/icons/minus.svg'
import plus from '../assets/icons/plus.svg'
import { useVolume } from '../hooks/useVolume'

const VolumeSettingsSmall = () => {
	const { volume, handleDecrement, handleIncrement } = useVolume()

	return (
		<>
			<div className='d-flex flex-column align-items-center m-right-10'>
				<Volume volume={volume} />
			</div>
			<div className='d-flex flex-column justify-content-end'>
				<Button onClick={handleIncrement} size='small' icon={plus} />
				<Button onClick={handleDecrement} size='small' icon={minus} classname='m-top-10' />
			</div>
		</>
	)
}

export default VolumeSettingsSmall
