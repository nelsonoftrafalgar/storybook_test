import Button from '../components/Button'
import Volume from '../containers/Volume'
import minus from '../assets/icons/minus.svg'
import plus from '../assets/icons/plus.svg'
import { useVolume } from '../hooks/useVolume'

const VolumeSettingsColumn = () => {
	const { volume, handleDecrement, handleIncrement } = useVolume()

	return (
		<>
			<Button onClick={handleIncrement} size='small' icon={plus} classname='m-bottom-10' />
			<Button onClick={handleDecrement} size='small' icon={minus} classname='m-bottom-10' />
			<Volume volume={volume} />
		</>
	)
}

export default VolumeSettingsColumn
