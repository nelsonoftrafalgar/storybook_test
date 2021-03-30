import { FC } from 'react'
import classNames from 'classnames'

export interface ITileWrapperProps {
	gradient?: 'light' | 'dark'
	classname?: string
}

const TileWrapper: FC<ITileWrapperProps> = ({ gradient, children, classname }) => {
	return <div className={classNames('tile-wrapper', gradient, classname)}>{children}</div>
}

export default TileWrapper
