import { FC } from 'react'
import classNames from 'classnames'

export interface ITextProps {
	text: string
	color: 'light' | 'dark' | 'turquoise'
	size: 'xs' | 's' | 'm' | 'l' | 'xl'
	weight: 'thin' | 'regular' | 'bold' | 'fat'
}

const Text: FC<ITextProps> = ({ text, color, size, weight }) => {
	return <span className={classNames('text', color, size, weight)}>{text}</span>
}

export default Text
