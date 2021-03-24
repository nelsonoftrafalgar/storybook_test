import { CSSProperties, FC, useState } from 'react'

import Icon from './Icon'
import classNames from 'classnames'
import lines from '../assets/icons/lines.svg'
import minus from '../assets/icons/minus.svg'
import plus from '../assets/icons/plus.svg'

const VolumeKnob: FC = () => {
	const [progress, setProgress] = useState(180)
	return (
		<div className='volume-knob-wrapper'>
			<div
				style={{ '--progress': `${progress}deg` } as CSSProperties}
				className={classNames('volume-knob-progress', { 'hide-half': progress <= 360 })}
			>
				<div className={classNames('volume-knob-half', { mask: progress <= 360 })}></div>
			</div>
			<div className='volume-knob-inner-wrapper'>
				<div className='volume-knob-face'>
					<button
						className='volume-knob-button'
						onClick={() => progress > 180 && setProgress(progress - 10)}
					>
						<Icon width='10' src={minus} />
					</button>
					<Icon width='70' src={lines} />
					<button
						className='volume-knob-button'
						onClick={() => progress < 540 && setProgress(progress + 10)}
					>
						<Icon width='10' src={plus} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default VolumeKnob
