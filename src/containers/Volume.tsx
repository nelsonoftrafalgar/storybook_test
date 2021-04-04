import { FC } from 'react'
import Icon from '../components/Icon'
import PercentIndicator from '../components/PercentIndicator'
import speaker from '../assets/icons/speaker.svg'

export interface IVolumeProps {
	volume: number
}

const Volume: FC<IVolumeProps> = ({ volume }) => {
	return (
		<>
			<PercentIndicator percent={volume} />
			<Icon className='m-top-10' src={speaker} />
		</>
	)
}

export default Volume
