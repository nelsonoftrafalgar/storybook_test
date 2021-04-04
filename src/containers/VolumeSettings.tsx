import Volume from '../containers/Volume'
import VolumeKnob from '../components/VolumeKnob'
import { useState } from 'react'

const VolumeSettings = () => {
	const [volume, setVolume] = useState(0)

	const handleIncrement = () => {
		setVolume(+(volume + 2.7).toFixed(2) === 97.2 ? 100 : +(volume + 2.7).toFixed(2))
	}

	const handleDecrement = () => {
		setVolume(+(volume - 2.7).toFixed(2))
	}

	return (
		<>
			<VolumeKnob handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
			<div className='d-flex flex-column align-items-center m-left-20 m-right-40'>
				<Volume volume={volume} />
			</div>
		</>
	)
}

export default VolumeSettings
