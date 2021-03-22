import { FC, useState } from 'react'

import Icon from '../components/Icon'
import classNames from 'classnames'
import play from '../assets/icons/play.svg'

export interface ISpeakerButtonProps {
	size: 'small' | 'large' | 'long'
}

const SpeakerButton: FC<ISpeakerButtonProps> = ({ size }) => {
	const [isOn, setIsOn] = useState(false)

	return (
		<button onClick={() => setIsOn(!isOn)} className={classNames('speaker-button', size)}>
			<Icon
				src={play}
				width={size === 'large' ? '12' : '8'}
				className={classNames('speaker-icon', { on: isOn })}
			/>
		</button>
	)
}

export default SpeakerButton
