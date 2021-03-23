import { CSSProperties, FC } from 'react'

export interface IProgressBarProps {
	maxProgress: number
	currentProgress: number
}

const ProgressBar: FC<IProgressBarProps> = ({ maxProgress, currentProgress }) => {
	return (
		<div
			style={{ '--maxProgress': `${maxProgress}px` } as CSSProperties}
			className='progress-bar-wrapper'
		>
			<div
				style={
					{
						'--currentProgress': `${
							currentProgress > maxProgress ? maxProgress : currentProgress
						}px`,
					} as CSSProperties
				}
				className='progress-bar-progress'
			/>
		</div>
	)
}

export default ProgressBar
