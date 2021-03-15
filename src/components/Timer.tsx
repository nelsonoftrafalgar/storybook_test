import { FC } from 'react'

export interface ITimerProps {
	count: number | string
}

const Timer: FC<ITimerProps> = ({ count }) => {
	return (
		<div className='timer-wrapper'>
			<div className='timer-progress'>
                <div className='timer-half'/>
				<div className='timer-cap'>
					<span className='timer-count'>
						{count}
						<span className='timer-unit'>sec</span>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Timer
