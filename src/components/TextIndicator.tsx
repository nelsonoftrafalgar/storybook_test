import { FC } from 'react'
import classNames from 'classnames'

export interface ITextIndicatorProps {
	text: string
	classname?: string
}

const TextIndicator: FC<ITextIndicatorProps> = ({ text, classname }) => {
	return (
		<div className={classNames('text-indicator-wrapper', classname)}>
			<span className='text-indicator-text'>{text}</span>
		</div>
	)
}

export default TextIndicator
