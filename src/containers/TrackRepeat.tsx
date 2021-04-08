import Button from '../components/Button'
import Text from '../components/Text'
import TrackIndicator from '../components/TrackIndicator'
import minus from '../assets/icons/minus.svg'
import plus from '../assets/icons/plus.svg'
import { useState } from 'react'

const TrackRepeat = () => {
	const [repeat, setRepeat] = useState(0)

	const handleIncrement = () => {
		repeat < 100 && setRepeat(repeat + 1)
	}

	const handleDecrement = () => {
		repeat > 0 && setRepeat(repeat - 1)
	}
	return (
		<>
			<div className='w-100 d-flex align-items-center justify-content-center m-top-20'>
				<Button onClick={handleDecrement} size='small' icon={minus} classname='m-right-15' />
				<TrackIndicator track={repeat} />
				<Button onClick={handleIncrement} size='small' icon={plus} classname='m-left-15' />
			</div>
			<Text text='Repeat' color='dark' size='s' weight='bold' classname='m-top-15' />
		</>
	)
}

export default TrackRepeat
